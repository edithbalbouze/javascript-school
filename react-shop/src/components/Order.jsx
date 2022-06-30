import React from 'react';
import '@style/Order.scss'
import arrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$82,81</p>
            <img src={arrow} alt="arrow" />
        </div>
    );
}

export default Order;