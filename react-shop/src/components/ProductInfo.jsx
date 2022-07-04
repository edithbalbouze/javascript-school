import React from 'react';
import '@style/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <>
            <img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/12/21/goods-first-img/1623611128449531698.jpg" alt="dress red wine" />
            <div className="product-info">
                <p>$12.22</p>
                <p>Short dress (Red wine)</p>
                <p>Beautiful short red wine-colored dress that highlights your figure, you can use it in any occasion combining it with different clothes.</p>
                <button className="primary-button add-to-cart-button">
                    <img src={addToCart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;