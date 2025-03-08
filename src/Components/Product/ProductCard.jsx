import React from 'react';
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const { image = null, title = "", rating = { rate: 0, count: 0 }, price = 0 } = product;

    return (
        <div className={classes.card__container}>
            <Link to={`/products/${product.id}`}>
                {image && <img src={image} alt={title} />}
            </Link>
            <div>
                <h3>{title}</h3>
                <div className={classes.rating}>
                    <Rating value={rating?.rate || 0} precision={0.2} />
                    <small>{rating?.count || 0}</small>
                </div>
                <div>
                    <NumericFormat
                        value={price}
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
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;