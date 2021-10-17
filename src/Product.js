import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p className="">{title}</p>
                <p className="product_price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map(item => {
                            return <p>⭐</p>
                        })}
                </div>
            </div>

            <img src={image} alt="" />
        </div>
    )
}

export default Product;