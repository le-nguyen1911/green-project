import React from 'react'
import { useUser } from '../../hooks/UserContext'

const Profile = () => {
    const { user } = useUser()
    return (
        <div className='container'>
            <span>Xin chào {user.fullName} (không phải tài khoản {user.fullName}? Hãy thoát ra và đăng nhập vào tài khoản của bạn)</span><br />
            <span>Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản lý địa chỉ giao hàng và thanh toán, and sửa mật khẩu và thông tin tài khoản.</span>
        </div>
    )
}

export default Profile
