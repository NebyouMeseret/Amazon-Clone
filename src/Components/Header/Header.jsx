import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router';
import { MdOutlineArrowDropDown } from "react-icons/md";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';



function Header() {
  return (
    <section>
        <section >
            <div className={classes.header__container}>
                <div className={classes.logo__container}>
                    <Link to="/">
                        <img src="/PngItem_12080.png" alt="amazon-logo" />
                    </Link>
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
                        <option value="">All</option>
                    </select>
                    <input type="text" name='' id='' placeholder='Search Amazon.ET' />
                    <BsSearch  size={25}/>
                </div>
                <div className={classes.order__container}>
                    <div className={classes.language}>
                        <img src="/ethiopia-26943_640.png" alt="" />
                        <select>
                            <option value="">En</option>
                            <option value="">Amh</option>
                            <option value="">Oro</option>
                        </select>
                    </div>
                    <div className={classes.signin}>
                        <Link to="/auth">
                                <p>Hello, Sign In</p>
                            <select>
                                <option>Account & Lists</option>
                            </select>
                        </Link>
                    </div>
                    <div className={classes.orders}>
                        <Link to="/orders">
                            <p>returns</p>
                            <span>& Orders</span>
                        </Link>
                    </div>
                    <div className={classes.cart}>
                        <Link to="/cart">
                            <BiCart size={35} />
                            <span>0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <LowerHeader />
    </section>
  )
}

export default Header