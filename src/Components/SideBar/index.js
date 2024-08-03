import React from 'react'
import { Link } from 'react-router-dom'

import { GoLightBulb } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";


import { ImHome } from "react-icons/im";
import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";


import './index.css'
const Sidebar = () => {

    return (
        <div className='sidebar-container'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                <div className='side-sub-cont'>
                    <AiFillProduct color="#FFBF00" size={25} />
                    <p className="side-para" >Product</p>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart'>
                <div className='side-sub-cont'>
                    <FaCartShopping color="#FFBF00" size={25} />
                    <p className="side-para" >Cart</p>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/order'>
                <div className='side-sub-cont'>
                    <BsFillBagHeartFill color="#FFBF00" size={25} />
                    <p className="side-para" >Order</p>
                </div></Link>

        </div>

    )

}







export default Sidebar


