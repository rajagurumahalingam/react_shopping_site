import React from 'react'
import Product from './Product'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                    id="1245"
                    title="new amazon clone product1"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1245"
                    title="new amazon clone product11"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1245"
                    title="new amazon clone product2"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1245"
                    title="new amazon clone product3"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1245"
                    title="new amazon clone product4"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1245"
                    title="new amazon clone product5"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1245"
                    title="new amazon clone product6"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
