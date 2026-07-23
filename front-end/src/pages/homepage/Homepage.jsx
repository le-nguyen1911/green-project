import { Link } from "react-router-dom";
import styles from "../homepage/Homepage.module.css";
import AlignmentDemo from "./AlignmentDemo";
import AlignmentDemo2 from "./AlignmentDemo2";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Homepage = () => {
    return (
        <>
            <div>
                <section className={styles.heroVideo}>
                    <iframe
                        className={styles.heroVideoIframe}
                        src="https://www.youtube.com/embed/87eb45AYeBE?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&start=336&end=405&enablejsapi=1"
                        title="Coffee Background"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </section>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>CÀ PHÊ NGUYÊN CHẤT</h2>

                            <h6>
                                Cà phê nguyên chất được chế biến 100% nguyên chất,
                                không pha trộn với bất kỳ loại hạt cà phê nào khác.
                            </h6>

                            <Link
                                to="/san-pham"
                                className="nav-link text-dark d-flex align-items-center gap-2 mt-3"
                            >
                                <span>Khám Phá</span>
                                <i className="pi pi-arrow-right"></i>
                            </Link>

                            <img
                                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/Frame-13020.png"
                                alt="Coffee"
                                className="img-fluid mt-3"
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <h2>THƠM NGON CHẤT LƯỢNG</h2>
                                </div>

                                <div className="col-md-8">
                                    <h6>
                                        Những hạt cà phê này thường được trồng theo
                                        phương pháp bền vững, không sử dụng hóa chất
                                        độc hại.
                                    </h6>
                                </div>
                            </div>
                            <AlignmentDemo />
                        </div>

                    </div>
                </div>

                <div className="container my-5">
                    <div >
                        <h1 className=" d-flex justify-content-center">Sản phẩm đóng gói </h1>
                        <h6 className=" d-flex justify-content-center">Nhâm nhi mỗi ngày với những loại cà phê đặc biệt như Arabica, Robusta, Espresso và nhiều hơn nữa!</h6>
                    </div>

                    <AlignmentDemo2 />

                </div>

                <div className="container" style={{
                    border: '1px solid #c4c4c4',
                    borderRadius: '10px',
                }}>
                    <div className="row">
                        <div className="col-6">
                            <h1 className="d-flex justify-content-center ">Sự vượt trội hàng đầu</h1>
                            <h6 className="d-flex justify-content-center ">Khám phá yếu tố chất lượng hàng đầu của sản phẩm cà phê tại cửa hàng của chúng tôi, nơi mang đến cho bạn trải nghiệm thưởng thức cà phê nguyên chất tuyệt vời nhất.</h6>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h2>01</h2>
                                    <h2>02</h2>
                                    <h2>03</h2>
                                </div>
                                <div>
                                    <h2>Hạt cà phê chất lượng cao</h2>
                                    <h2>Rang xay tại chỗ</h2>
                                    <h2>Đa dạng sản phẩm</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                            <img src="https://chapelyard.co.uk/wp-content/uploads/2025/02/cafe-dereham.png" className="w-100" />
                        </div>
                    </div>
                </div>


            </div >
        </>
    );
};

export default Homepage;