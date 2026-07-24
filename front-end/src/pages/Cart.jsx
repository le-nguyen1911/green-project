import React, { useEffect, useState } from "react";
import Order from "./Account/Order";
import { Button } from "bootstrap";
import { Trash } from "@primeicons/react";
import { useUser } from "../hooks/UserContext";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
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
    const cart = carts.find(item => item.id === cartId)

    const newItems = cart.items.filter((item) =>
      item.product_id !== productId
    );
    await axios.patch(`cart/${cartId}`, { items: newItems })
    setCarts((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, items: newItems } : item,
      ),
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const [cartRes, productRes] = await Promise.all([
        axios.get("cart"),
        axios.get("products"),
      ]);
      const cart = cartRes.data.filter((item) => item.user_id === user.id);
      console.log(cart);

      setCarts(cart);
      setProducts(productRes.data);
    };
    fetchData();
  }, [user]);
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
                {carts.map((cart) =>
                  cart.items.map((item) => {
                    const product = products.find(
                      (p) => p.id === item.product_id,
                    );

                    return (
                      <tr key={item.product_id}>
                        <td className="text-center">
                          <div className="flex justify-center cursor-pointer">
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
                                onClick={(e) =>
                                  decrease(cart.id, item.product_id)
                                }
                              >
                                -
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                className="bg-gray-200 px-2 py-1"
                                onClick={(e) =>
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
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-white shadow rounded-2xl p-2"></div>
      </div>
    </div>
  );
};

export default Cart;
