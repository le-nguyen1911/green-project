import React, { useEffect, useState } from 'react'
import { useUser } from '../../hooks/UserContext'
import axios from 'axios'
const Order = () => {
    const { user } = useUser()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            const res = await axios.get("orders");
            const order = res.data.filter(o => o.user_id === user.id);
            setOrders(order);
        };

        fetchData();
    }, [user]);
    return (
        <div>Order</div>
    )
}

export default Order