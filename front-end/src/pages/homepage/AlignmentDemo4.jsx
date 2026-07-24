import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";


export default function AdvancedDemo() {

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Link
                to="/gioi-thieu" 
                className="no-underline inline-block font-semibold px-5 py-3 border-round-lg shadow-2 transition-colors transition-duration-200"
                style={{ backgroundColor: '#6f3f22', color: '#ffffff', width: '200px', borderRadius: "8px", textDecoration: "none", }}
            >

                Khám Phá
            </Link>
        </div>
    );
    return (
        <>
            <div className='container'>
                <div>
                    <h1 className=" d-flex justify-content-center">Hành trình sản xuất cà phê</h1>
                    <h6 className=" d-flex justify-content-center">Khám phá quy trình chất lượng hàng đầu của sản phẩm cà phê tại cửa hàng của chúng tôi.</h6>
                </div>

                <div className="card flex justify-content-center col-3">
                    <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
        </>
    );
}

