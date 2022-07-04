import React from 'react';
import OrderItem from '@components/OrderItem';
import '@style/CheckOut.scss';


const CheckOut = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-container">
                <h1 className="title">My order</h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>04.25.2021</span>
                            <span>6 articles</span>
                        </p>
                        <p>$82,81</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
}

export default CheckOut;