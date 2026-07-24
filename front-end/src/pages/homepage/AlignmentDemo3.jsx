import React from 'react';
import { Link } from "react-router-dom";
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';


export default function AlignmentDemo3() {
    const features = [
        { id: '01', title: 'Hạt cà phê chất lượng cao' },
        { id: '02', title: 'Rang xay tại chỗ' },
        { id: '03', title: 'Đa dạng sản phẩm' },
    ];
    return (
        <>


            <div className="container" style={{
                width: '1200px',
                overflow: 'hidden',
                border: '1px solid #c4c4c4',
                borderRadius: '10px',
            }}>
                <div className="row">
                    <div className="p-card border-round-2xl surface-card shadow-2 max-w-30rem mx-auto my-5 overflow-hidden font-sans col-6">
                        {/* Nội dung chính */}
                        <div className="p-5 text-center">
                            {/* Tiêu đề */}
                            <h2 className="text-3xl font-extrabold uppercase mt-2 mb-3" style={{ color: '#3d180a' }}>
                                SỰ VƯỢT TRỘI HÀNG ĐẦU
                            </h2>

                            {/* Mô tả */}
                            <p className="text-color-secondary text-sm line-height-3 mb-5 px-2">
                                Khám phá yếu tố chất lượng hàng đầu của sản phẩm cà phê tại cửa hàng của chúng tôi, nơi mang đến cho bạn trải nghiệm thưởng thức cà phê nguyên chất tuyệt vời nhất.
                            </p>

                            {/* Danh sách 01, 02, 03 */}
                            <div className="max-w-25rem mx-auto mb-5">
                                {features.map((item) => (
                                    <div key={item.id}>
                                        <div className="flex align-items-center gap-4 py-2 text-left">
                                            <span className="text-xl font-medium text-800">{item.id}:</span>
                                            <span className="text-xl font-medium text-900">{item.title}</span>
                                        </div>
                                        <Divider className="my-1 border-gray-800" />
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/san-pham" // Đường dẫn trang bạn muốn chuyển tới
                                className="no-underline inline-block font-semibold px-5 py-3 border-round-lg shadow-2 transition-colors transition-duration-200"
                                style={{ backgroundColor: '#6f3f22', color: '#ffffff', width: '200px', borderRadius: "8px", textDecoration: "none", }}
                            >

                                Khám Phá Ngay
                            </Link>
                        </div>

                    </div>


                    <div className="col-6">
                        <Image src="https://chapelyard.co.uk/wp-content/uploads/2025/02/cafe-dereham.png" alt="Image" width="590" />
                    </div>
                </div>
            </div>
        </>

    );
}

