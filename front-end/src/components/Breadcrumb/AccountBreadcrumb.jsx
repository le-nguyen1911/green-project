import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from "./AccountBreadcrumb.module.css";

const breadcrumbMap = {
    "/account": "Tài khoản",
    "/account/orders": "Đơn hàng",
    "/account/address": "Địa chỉ",
    "/account/profile": "Thông tin tài khoản",
    "/account/password": "Đổi mật khẩu",
};
const AccountBreadcrumb = () => {
    const location = useLocation()

    const current = breadcrumbMap[location.pathname]
    return (
        <div className={styles.breadcrumb}>
            <Link to="/">Trang chủ</Link>

            <span>/</span>

            <Link to="/account">Tài khoản</Link>

            {location.pathname !== "/account" && (
                <>
                    <span>/</span>

                    <span className={styles.active}>
                        {current}
                    </span>
                </>
            )}
        </div>
    )
}

export default AccountBreadcrumb