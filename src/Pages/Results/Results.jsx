import React, { useEffect, useState } from 'react'
import classes from "./Results.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard';
import productUrl from '../../API/endPoint'

function Results() {
  const { categoryName } = useParams()
  const [result, setResult] = useState([])
  useEffect(() => {
    axios.get(`${productUrl}/category/${categoryName}`)
      .then((res) => {
        setResult(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [categoryName])
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "5px 20px" }}>Results</h1>
        <p style={{ padding: "10px 20px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products__container}>
          {
            result.map( (prod) => {
              return <ProductCard key={prod.id} product={prod} />
            })
          }
        </div>
      </section>
    </LayOut>
  )
}

export default Results