import { ChevronDown, Envelope, Map, Phone } from '@primeicons/react';
import { User } from '@primeicons/react/user';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { useUser } from '../../hooks/UserContext';
const InformationPesonal = () => {
    const { user } = useUser()
    return (
        <div className="container">
            <h3 className="fw-bold">
                Thông tin cá nhân <span className="text-danger">*</span>
            </h3>

            <form className="row g-3 mt-2">
                <div className="col-12 ">
                    <InputGroup.Root >
                        <InputGroup.Addon>
                            <User />
                        </InputGroup.Addon>
                        <InputText placeholder="tên hiển thị" value={user.fullname} />
                    </InputGroup.Root>
                    <p className='mt-1'>Tên này sẽ hiển thị trong trang Tài khoản và phần Đánh giá sản phẩm</p>
                </div>

                <div className="col-12 col-md-6 ">
                    <InputGroup.Root >
                        <InputGroup.Addon>
                            <Phone />
                        </InputGroup.Addon>
                        <InputText placeholder="Số điện thoại" />
                    </InputGroup.Root>
                </div>

                <div className="col-12 col-md-6">
                    <InputGroup.Root >
                        <InputGroup.Addon>
                            <Envelope />
                        </InputGroup.Addon>
                        <InputText placeholder="Email" />
                    </InputGroup.Root>
                </div>


            </form>

            <h3 className="fw-bold mt-5">
                Thay đổi mật khẩu
            </h3>
        </div>
    )
}

export default InformationPesonal
