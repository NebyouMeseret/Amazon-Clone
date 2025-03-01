import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.css"

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li>
                <RxHamburgerMenu />
                <p>All</p>
            </li>
            <li>Today's Deal</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader