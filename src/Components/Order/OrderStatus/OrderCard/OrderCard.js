import React from 'react';
import './OrderCard.css';

const OrderCard = (props) => {

    const {image, status, category, details, color, bg} = props.order;

    return (
        <div className='col-lg-6 col-12 mt-4'>
            <div className="order-card">
                <div className='row'>
                    <div className="col-auto">
                        <img width='60px' src={`data:image/png;base64,${image.img}`} alt=""/>
                    </div>
                    <div className="col text-right">
                        <button className='status-btn btn-sm' style={{color: color, backgroundColor: bg}}>{status}</button>
                    </div>
                </div>
                <h6>{category}</h6>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default OrderCard;