import React from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from './CurrencyFormat/CurrencyFormat'
import classes from "./Product.module.css"
import { NumericFormat } from 'react-number-format';


function ProductCard({product}) {
    // const {image, title, count, price} = product;
    return (
        <div className={classes.card__container}>
            <a href="">
                <img src={product.image} alt="" />
            </a>
            <div className=''>
                <h3>{product.title}</h3>
                <div className={classes.rating}>
                    <Rating value={product.rating.rate} precision={0.2} />
                    <small>{product.rating.count}</small>
                </div>
                <div>
                    {/* <CurrencyFormat amount={product.price} /> */}
                    <NumericFormat
                        value={product.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'ETB '}
                        format="ETB. ###,###.##"
                        decimalScale={2} 
                        fixedDecimalScale={true} 
                        renderText={(value) => <strong><code>{value}</code></strong>}
                    />
                </div>
                <button className={classes.button}>
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard