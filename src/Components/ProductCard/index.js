import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

const ProductCard = props => {
    const { details } = props
    const { imageUrl, title, _id, brand, rating, price } = details

    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${_id}`}>
            <li style={{ width: '25vw', height: '80vh', backgroundColor: '#FFF39C', border: '2px solid #F2B703',  borderRadius: '25px', padding: '25px', margin: '25px', }}>
                <img src={imageUrl} style={{ borderRadius: '35px', width: '355px', margin: '15px' }} alt="product" />
                <h1 style={{ fontSize: '25px' }}>{title}</h1>
                <p style={{ fontSize: '18px' }}>{brand}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <p>{rating}</p>
                        <FaStar style={{ alignSelf: 'center', margin: '2px' }} />
                    </div>

                    <p>Rs. {price}/-</p>
                </div>
            </li>
        </Link>
    )
}

export default ProductCard