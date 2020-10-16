import React, { useContext, useEffect, useState } from 'react';
import './OrderStatus.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderCard from './OrderCard/OrderCard';
import { UserContext } from '../../../App';

const OrderStatus = () => {
    
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://tranquil-reaches-92319.herokuapp.com/userOrders/${userInfo.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])

    return (
        <div className='order-status row'>
            <Sidebar/>
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Order</h6>
                <div className="orders row">
                    {
                        orders.length === 0 ?
                        <div className="col-12 text-center">
                            <img width='50px' className="pt-4" src="https://i.imgur.com/HMgSowb.gif" alt=""/>
                        </div>
                        :
                        orders.map(order => <OrderCard order={order} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;