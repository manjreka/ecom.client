import React from 'react'
import { Component } from 'react'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import Header from '../Header'
import SideBar from '../SideBar'
import { FaStar } from "react-icons/fa6";
import './index.css'

class ProductDetails extends Component {
    state = { productDetails: {}, quantity: 1 }

    componentDidMount() {
        this.getProductDetails()
    }




    getProductDetails = async () => {
        console.log(this.props)
        const { match } = this.props
        const { params } = match
        const { id } = params
        const url = `http://localhost:4070/product/${id}`
        console.log(url)
        const options = {
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWUwZjM1OTQ5YTNjZDBkMjExYTU0YSIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdVSlhneHJ4VkNNSEFjamhKTUpsYy42MG9GRFFyb1lzM1JZRkJudmJFU1ZWNEV3UTMzS1VXIiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJENySGFmLncxUFpPdkQzVkxHL1ZDVk9zRzQzUWlCdHprbWlRZjBrS3NsSmtXRHpYRHpIZ3RXIiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjgzNTY4LCJleHAiOjE3MjU1NjM1Njh9.N2Vf2NmA-BZ4ngRg0PcOnUwt3p4r0y8IdxNPIV13GvU'}`,
            },
            method: 'GET',
        }
        const response = await fetch(url, options)

        const data = await response.json()
        if (response.ok) {
            console.log(data)
            this.onSubmitProductSuccess(data.productItem)
        }
        else {
            this.onSubmitProductFailure(data.message)
        }
    }


    onSubmitProductSuccess = (item) => {
        this.setState({ productDetails: item })
    }

    onSubmitProductFailure = (msg) => {
        alert(`${msg}`)
    }

    onIncrementQuantity = () => {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
    }

    onDecrementQuantity = () => {
        this.state.quantity !== 0 ? this.setState(prevState => ({ quantity: prevState.quantity - 1 })) : this.setState({ quantity: 0 })
    }

    onClickAddToCart = async () => {
        const url = 'http://localhost:4070/cart'
        const { _id } = this.state.productDetails
        const { quantity } = this.state
        const newProduct = {
            productId: _id,
            quantity
        }
        console.log(newProduct)
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWUwZjM1OTQ5YTNjZDBkMjExYTU0YSIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdVSlhneHJ4VkNNSEFjamhKTUpsYy42MG9GRFFyb1lzM1JZRkJudmJFU1ZWNEV3UTMzS1VXIiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJENySGFmLncxUFpPdkQzVkxHL1ZDVk9zRzQzUWlCdHprbWlRZjBrS3NsSmtXRHpYRHpIZ3RXIiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjgzNTY4LCJleHAiOjE3MjU1NjM1Njh9.N2Vf2NmA-BZ4ngRg0PcOnUwt3p4r0y8IdxNPIV13GvU'}`,
            },
            method: 'POST',
            body: JSON.stringify(newProduct)
        }
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            alert('Product Successfully Added to Cart')
        }
    }



    render() {
        const { productDetails } = this.state
        const {
            brand,
            imageUrl,
            price,
            rating,
            title,
        } = productDetails
        const { quantity } = this.state
        return (
            <div>
                <Header />
                <hr style={{ borderTop: '0.2px solid lightGrey' }} />
                <div className='sub-container'>
                    <SideBar />
                    <div style={{ alignSelf: 'center' }} className="product-details-success-view product-container">
                        <div className="product-details-container">
                            <img src={imageUrl} alt="product" className="product-image" />
                            <div className="product">
                                <h1 className="product-name">{title}</h1>
                                <p className="price-details">Rs {price}/-</p>
                                <div className="rating-and-reviews-count">
                                    <div className="rating-container">
                                        <div style={{ display: 'flex' }}>
                                            <p>{rating}</p>
                                            <FaStar style={{ alignSelf: 'center', margin: '2px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="label-value-container">
                                    <p className="label">Brand:</p>
                                    <p className="value">{brand}</p>
                                </div>
                                <hr className="horizontal-line" />
                                <div className="quantity-container">
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={this.onDecrementQuantity}
                                    >
                                        <BsDashSquare className="quantity-controller-icon" />
                                    </button>
                                    <p className="quantity">{quantity}</p>
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={this.onIncrementQuantity}
                                    >
                                        <BsPlusSquare className="quantity-controller-icon" />
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="button add-to-cart-btn"
                                    onClick={this.onClickAddToCart}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductDetails





