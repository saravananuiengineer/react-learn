import {useState, useEffect} from 'react'
const useFetchOrders = (id)=>{
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        if (!id) return;
        fetchOrders();
    }, [id])

    const fetchOrders = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const orders = await fetch(`http://localhost:3001/orders/${id}`);
        const data = await orders.json();
        setOrderData(data.menuList || {});
    }

    return {orderData, setOrderData}
}
export default useFetchOrders;