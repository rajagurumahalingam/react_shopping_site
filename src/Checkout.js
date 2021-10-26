import React from 'react';
import { useStatevalue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Totalprice from './Totalprice';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ basket }] = useStatevalue();

    return ( 
        <div className="checkout">
            <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                className="checkout_ad" alt="" />
            {
                basket.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty!</h2>
                        <p>You have no ittem on the basket, To buy click on the "Add to basket" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title"> Your shoopping basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                )}
                </div>
                <div className="checkout__right">
                    <Totalprice /> 
            </div>
        </div>
    )
}

export default Checkout;
