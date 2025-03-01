import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
// import  "./Header.css"



function Header() {
  return (
    <section>
        <section >
            <div className={classes.header__container}>
                <div className={classes.logo__container}>
                    <a href="/">
                        <img src="/PngItem_12080.png" alt="amazon-logo" />
                    </a>
                </div>
                <div className={classes.delivery}>
                    <span>
                        <SlLocationPin size={17}/>
                    </span>
                    <div>
                        <p>Deliver to</p>
                        <span>Ethiopia</span>
                    </div>
                </div>
                <div className={classes.search}>
                    <select name="" id="" className={classes.selectt} >
                        <option value="" selected="selected">All</option>
                    </select>
                    <input type="text" name='' id='' placeholder='Search Amazon.ET' />
                    <BsSearch  size={25}/>
                </div>
                <div className={classes.order__container}>
                    <div className={classes.language}>
                        <img src="/US.png" alt="" />
                        <select>
                            <option value="">En</option>
                        </select>
                    </div>
                    <div className={classes.signin}>
                        <a href="">
                                <p>Hello, Sign In</p>
                            <select>
                                <option>Account & Lists</option>
                            </select>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <p>returns</p>
                            <span>& Orders</span>
                        </a>
                    </div>
                    <div className={classes.cart}>
                        <a href="/cart">
                            <BiCart size={35} />
                            <span>0</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <LowerHeader />
    </section>
  )
}

export default Header