import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router";

function CategoryCard({data}) {
    return (
        <div className={classes.category}>
            <Link to={`/category/${data.name}`} className={classes.anchor}>
                <span>
                    <h2>{data.title}</h2>
                </span>
                <img src={data.imageLink} alt={data.name} />
                <p>Shop now</p>
            </Link>
        </div>
    );
}

export default CategoryCard;
