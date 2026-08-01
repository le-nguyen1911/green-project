import { useEffect, useState } from "react";
import { Trash } from "@primeicons/react";
import { useUser } from "../hooks/UserContext";
import axios from "axios";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const increase = async (cartId, productId) => {
    const cart = carts.find((item) => item.id === cartId);

    const newItems = cart.items.map((c) =>
      c.product_id === productId ? { ...c, quantity: c.quantity + 1 } : c,
    );

    await axios.patch(`cart/${cartId}`, { items: newItems });
    setCarts((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, items: newItems } : item,
      ),
    );
  };

  const decrease = async (cartId, productId) => {
    const cart = carts.find((item) => item.id === cartId);

    const newItems = cart.items.map((item) =>
      item.product_id === productId
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
        : item,
    );

    await axios.patch(`cart/${cartId}`, { items: newItems });
    setCarts((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, items: newItems } : item,
      ),
    );
  };

  const removeItem = async (cartId, productId) => {
    const cart = carts.find((item) => item.id === cartId);

    const newItems = cart.items.filter(
      (item) => item.product_id !== productId,
    );
    await axios.patch(`cart/${cartId}`, { items: newItems });
    setCarts((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, items: newItems } : item,
      ),
    );
  };

  const handleCheckout = () => {
    if (totalquantity === 0) return;
    console.log("Thanh toán", { totalquantity, totalPrice });
  };

  const totalquantity = carts.reduce(
    (cartTotal, cart) =>
      cartTotal +
      cart.items.reduce((itemTotal, item) => itemTotal + item.quantity, 0),
    0,
  );
  const totalPrice = carts.reduce(
    (cartTotal, cart) =>
      cartTotal +
      cart.items.reduce(
        (itemTotal, item) => itemTotal + item.quantity * item.price,
        0,
      ),
    0,
  );

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const [cartRes, productRes] = await Promise.all([
          axios.get("cart"),
          axios.get("products"),
        ]);
        const cart = cartRes.data.filter((item) => item.user_id === user.id);

        setCarts(cart);
        setProducts(productRes.data);
      } catch (err) {
        console.error("Lỗi khi tải giỏ hàng:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const hasItems = carts.some((cart) => cart.items.length > 0);

  if (!user) {
    return (
      <div className="mx-auto px-5 py-10 text-center">
        <p>Vui lòng đăng nhập để xem giỏ hàng của bạn.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mx-auto px-5 py-10 text-center">
        <p>Đang tải giỏ hàng...</p>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 bg-white  p-2">
          <div className="w-full">
            <table className="w-full rounded-2xl border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-center font-semibold">Thao tác</th>
                  <th className="p-2 text-center font-semibold">Hình ảnh</th>
                  <th className="p-2 text-center font-semibold">Sản phẩm</th>
                  <th className="p-2 text-center font-semibold">Giá</th>
                  <th className="p-2 text-center font-semibold">Số lượng</th>
                  <th className="p-2 text-center font-semibold">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {!hasItems ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-500">
                      Giỏ hàng của bạn đang trống.
                    </td>
                  </tr>
                ) : (
                  carts.map((cart) =>
                    cart.items.map((item) => {
                      const product = products.find(
                        (p) => p.id === item.product_id,
                      );

                      return (
                        <tr key={`${cart.id}-${item.product_id}`}>
                          <td className="text-center">
                            <div
                              className="flex justify-center cursor-pointer"
                              onClick={() =>
                                removeItem(cart.id, item.product_id)
                              }
                            >
                              <Trash size={18} />
                            </div>
                          </td>

                          <td className="text-center">
                            <img
                              src={product?.images?.[0]}
                              alt={product?.name}
                              className="w-20 h-20 object-cover mx-auto"
                            />
                          </td>

                          <td className="text-center">{product?.name}</td>

                          <td className="text-center">
                            {item.price.toLocaleString()}đ
                          </td>

                          <td className="text-center">
                            <div className="flex justify-center">
                              <div className="flex border rounded overflow-hidden">
                                <button
                                  type="button"
                                  className="bg-gray-200 px-2 py-1"
                                  onClick={() =>
                                    decrease(cart.id, item.product_id)
                                  }
                                >
                                  -
                                </button>
                                <span className="px-3 py-1">
                                  {item.quantity}
                                </span>
                                <button
                                  className="bg-gray-200 px-2 py-1"
                                  onClick={() =>
                                    increase(cart.id, item.product_id)
                                  }
                                  type="button"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>

                          <td className="text-center">
                            {(item.price * item.quantity).toLocaleString()}đ
                          </td>
                        </tr>
                      );
                    }),
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-1 bg-white p-2 ">
          <div className="border p-2">
            <p className="">Tổng giỏ hàng</p>
            <p className="border-t text-[#6f4e37] font-bold">
              Tổng sản phẩm : {totalquantity}
            </p>
            <p className="border-t text-[#6f4e37] font-bold">
              Tổng tiền: {totalPrice.toLocaleString()}đ
            </p>
          </div>
          <div
            className={`w-full mt-2 text-white p-2 flex justify-center ${
              totalquantity === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#6f4e37] cursor-pointer"
            }`}
            onClick={()=>handleCheckout()}
          >
            Thanh toán ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
