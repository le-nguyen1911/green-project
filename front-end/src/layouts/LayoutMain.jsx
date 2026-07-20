import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../assets/logo.png";
import 'primeicons/primeicons.css';


const LayoutMain = () => {

    return (
        <>
            <nav className="container-fluid border-bottom bg-white py-3">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-4">
                            <ul className="nav gap-4 fw-semibold">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark p-0" to="gioi-thieu">
                                        GIỚI THIỆU
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark p-0" to="san-pham">
                                        SẢN PHẨM
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark p-0" to="tin-tuc">
                                        TIN TỨC
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark p-0" to="lien-he">
                                        LIÊN HỆ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link to="home-page" className="col-4 text-center">
                            <img src={logo} alt="Logo" className="img-fluid" style={{ width: "170px", height: "auto" }}
                            />
                        </Link>

                        <div className="col-4">
                            <div className="d-flex justify-content-end align-items-center gap-4">

                                <div className="d-flex align-items-center border-bottom">
                                    <input type="text"
                                        placeholder="Tìm kiếm"
                                        className="border-0 shadow-none"
                                    />
                                    <i className="pi pi-search ms-2"></i>
                                </div>
                                <Link to={"/wishlist"} className='text-dark'>
                                    <i className="pi pi-heart fs-5"></i>
                                </Link>

                                <Link to={"/account"} className='text-dark'>
                                    <i className="pi pi-user fs-5"></i>
                                </Link>

                                <span className="position-relative">
                                    <i className="pi pi-shopping-cart fs-5"></i>

                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                        0
                                    </span>
                                </span>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <Outlet />
            <footer className='bg-light'>

                <div className="footer">
                    <div className="footer-content row d-flex justify-content-center align-items-center border-bottom" >

                        <div className="footer-col about col-lg-3 col-md-12 mb-12 mb-lg-0">
                            <img src={logo} className="logo" style={{ width: "200px", height: "auto" }} />

                            <p>
                                Cà phê nguyên chất được chế biến 100% nguyên chất,
                                không pha trộn với bất kỳ loại hạt cà phê nào khác.
                            </p>
                        </div>

                        <div className="footer-col col-lg-2 col-md-6 col-6  mb-3 mb-lg-0">
                            <h3>DANH MỤC</h3>

                            <ul>
                                <li>Trang chủ</li>
                                <li>Giới thiệu</li>
                                <li>Sản phẩm</li>
                                <li>Tin tức</li>
                                <li>Liên hệ</li>
                            </ul>
                        </div>

                        <div className="footer-col col-lg-2 col-md-6 col-6 mb-3 mb-lg-0">
                            <h3>HỖ TRỢ</h3>

                            <ul>
                                <li>Câu hỏi thường gặp</li>
                                <li>Dịch vụ khách hàng</li>
                                <li>Vị trí cửa hàng</li>
                                <li>Sản phẩm bán chạy</li>
                                <li>Manufactures</li>
                            </ul>
                        </div>

                        <div className="footer-col col-lg-2 col-md-12 col-12 mb-3 mb-lg-0">
                            <h3>CHÍNH SÁCH</h3>

                            <ul>
                                <li>Chính sách bảo mật</li>
                                <li>Chính sách giao hàng</li>
                                <li>Chính sách đổi trả</li>
                                <li>Chính sách bảo hành</li>
                                <li>Điều khoản & điều kiện</li>
                            </ul>
                        </div>

                        <div className="footer-col subscribe col-lg-2 col-md-12 mb-3 mb-lg-0">

                            <h3>ĐĂNG KÝ NHẬN TIN TỨC</h3>

                            <p>
                                Đăng ký ngay để nhận các tin tức khuyến mãi mới nhất.
                            </p>

                            <div className="newsletter">
                                <input type="email" placeholder="Nhập email" />
                                <button>ĐĂNG KÝ</button>
                            </div>

                            <div className="social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>

                        </div>

                    </div>

                    <div className="copyright d-flex justify-content-center">
                        © Thiết kế và lập trình bởi MONA.Media
                    </div>

                </div>

            </footer>
        </>
    );
};

export default LayoutMain;