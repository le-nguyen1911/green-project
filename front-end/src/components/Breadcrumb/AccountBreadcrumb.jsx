import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from "./AccountBreadcrumb.module.css";
import { useUser } from '../../hooks/UserContext';

const breadcrumbMap = {
    "/account": "Tài khoản",
    "/account/orders": "Đơn hàng",
    "/account/profile": "Thông tin tài khoản",
};
const AccountBreadcrumb = () => {
    const location = useLocation()
    const { logout } = useUser()
    const current = breadcrumbMap[location.pathname]
    return (
        <div className={styles.breadcrumb}>
            <div className="pathaaction">
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

            <div className={styles.logout} onClick={logout}>
                Đăng xuất
            </div>
        </div>
    )
}

export default AccountBreadcrumb