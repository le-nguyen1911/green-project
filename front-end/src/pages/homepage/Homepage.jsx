import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Link } from "react-router-dom";
import styles from "../homepage/Homepage.module.css";


const Homepage = () => {

    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    useEffect(() => {
        axios.get("products")
            .then((res) => {
                setProducts(res.data.slice(0, 9));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">

                <div className="mb-3">
                    <img
                        src={product.images}
                        alt={product.name}
                        className="w-6 shadow-2"
                    />
                </div>

                <div>
                    <h4 className="mb-1">
                        {product.name}
                    </h4>

                    <h6 className="mt-0 mb-3">
                        {product.price} VNĐ
                    </h6>

                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button
                            icon="pi pi-search"
                            className="p-button p-button-rounded"
                        />

                        <Button
                            icon="pi pi-star-fill"
                            className="p-button-success p-button-rounded"
                        />
                    </div>

                </div>

            </div>
        );
    };


    return (
        <>
            <section className={styles.heroVideo}>
                <iframe
                    className={styles.heroVideoIframe}
                    src="https://www.youtube.com/embed/87eb45AYeBE?autoplay=1&mute=1&loop=1&playlist=87eb45AYeBE&controls=0&rel=0&playsinline=1&start=336&end=405"
                    title="Coffee Background"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </section>


            <div className="container">

                <div className="row">

                    <div className="col-4">

                        <h2>CÀ PHÊ NGUYÊN CHẤT</h2>

                        <h5>
                            Cà phê nguyên chất được chế biến 100% nguyên chất,
                            không pha trộn với bất kỳ loại hạt cà phê nào khác.
                        </h5>


                        <Link
                            className="nav-link text-dark d-flex align-items-center gap-2"
                            to="/san-pham"
                        >
                            <span>Khám Phá</span>
                            <i className="pi pi-arrow-right"></i>
                        </Link>


                        <img
                            src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/Frame-13020.png"
                            alt=""
                        />

                    </div>



                    <div className="col-8">

                        <div className="row">

                            <h2 className="col-4">
                                THƠM NGON CHẤT LƯỢNG
                            </h2>

                            <h5 className="col-8">
                                Những hạt cà phê này thường được trồng theo
                                phương pháp bền vững, không sử dụng hóa chất độc hại.
                            </h5>


                        </div>


                        <div className="card">

                            <h2>pokasf</h2>

                        </div>


                    </div>


                </div>

            </div>
        </>
    );
};


export default Homepage;
