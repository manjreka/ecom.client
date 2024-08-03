import React from 'react'
import { Component } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Footer from '../Footer'

import './index.css'
class Cart extends Component {
    state = { cart: {}, cartList: [] }

    componentDidMount() {
        this.getCart()
    }


    getCart = async () => {
        const url = 'http://localhost:4070/cart'
        const options = {
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWUwZjM1OTQ5YTNjZDBkMjExYTU0YSIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdVSlhneHJ4VkNNSEFjamhKTUpsYy42MG9GRFFyb1lzM1JZRkJudmJFU1ZWNEV3UTMzS1VXIiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJENySGFmLncxUFpPdkQzVkxHL1ZDVk9zRzQzUWlCdHprbWlRZjBrS3NsSmtXRHpYRHpIZ3RXIiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjgzNTY4LCJleHAiOjE3MjU1NjM1Njh9.N2Vf2NmA-BZ4ngRg0PcOnUwt3p4r0y8IdxNPIV13GvU'}`,
            },
            method: 'GET',
        }
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            this.cartSuccess(data.cartItems)
        }
        else {
            this.cartFailure(data.message)
        }
    }

    cartSuccess = (cartItems) => {
        const { item } = cartItems
        this.setState({ cart: cartItems, cartList: item })
    }

    orderButtonClicked = async () => {
        const url = 'http://localhost:4070/orders'
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWUwZjM1OTQ5YTNjZDBkMjExYTU0YSIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdVSlhneHJ4VkNNSEFjamhKTUpsYy42MG9GRFFyb1lzM1JZRkJudmJFU1ZWNEV3UTMzS1VXIiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJENySGFmLncxUFpPdkQzVkxHL1ZDVk9zRzQzUWlCdHprbWlRZjBrS3NsSmtXRHpYRHpIZ3RXIiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjgzNTY4LCJleHAiOjE3MjU1NjM1Njh9.N2Vf2NmA-BZ4ngRg0PcOnUwt3p4r0y8IdxNPIV13GvU'}`,
            },
            method: 'POST',
        }
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            const { history } = this.props
            history.replace('/order')
        }
    }


    render() {
        console.log(this.state.cartList)
        return (
            <div>
                <Header />
                <hr style={{ borderTop: '0.2px solid lightGrey' }} />
                <div className='sub-container'> 
                    <SideBar />
                    <div className='cart-cont'>
                        <h1>Cart Details</h1>
                        <ul className='cart-sub-cont'>
                            {this.state.cartList.map(each => (<li className='cart-card'>
                                <h1 style={{ fontSize: '20px' }}>{each.productId.title}</h1>
                                <p>{each.productId.brand}</p>
                                <img className='cart-img'
                                    src={each.productId.imageUrl} alt="product" />
                                <p>Quantity: {each.quantity}</p>
                            </li>))}
                        </ul>
                        <div style = {{alignSelf: 'flex-end'}}>
                        <button className="button add-to-cart-btn" type='button' onClick={this.orderButtonClicked}>Order Now</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cart


