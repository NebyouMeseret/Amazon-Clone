import React from "react";
import { categoryInfos } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";


function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => {
        return <CategoryCard key={infos.id} data={infos} />
      })}
    </section>
  );
}

export default Category;