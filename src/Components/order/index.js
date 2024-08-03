import React from 'react'
import { Component } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Footer from '../Footer'

class Order extends Component {
    state = { orderList: [] }

    componentDidMount() {
        this.getOrderDetails()
    }

    getOrderDetails = async () => {
        const url = 'http://localhost:4070/order'
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
        const { orderDetails } = data
        console.log(orderDetails)
        if (response.ok) {
            this.setState({ orderList: orderDetails })
        }
    }


    render() {
        const { orderList } = this.state
        return (
            <div>
                <Header />
                <hr style={{ borderTop: '0.2px solid lightGrey' }} />
                <div className='sub-container'>
                    <SideBar />
                    <div className='cart-cont'>
                        <h1>Order Details</h1>
                        <ul className='cart-sub-cont'>
                            {orderList.map(each => (<li className='cart-card'>
                                <p><span style={{ fontWeight: 'bold' }} >OrderId:</span> {each._id}</p>
                                <p><span style={{ fontWeight: 'bold' }} >Order Date:</span>  {each.orderDate}</p>
                                <p><span style={{ fontWeight: 'bold' }} >Amount:</span>  {each.totalAmount}</p>
                                <p>please collect your order at door</p>
                                <p style={{ color: 'blue' }}>Thanks for connecting with us!!</p>
                            </li>))}
                        </ul>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Order




/*

<div style={{ alignSelf: 'flex-end' }}>
                            <button className="button add-to-cart-btn" type='button' onClick={this.orderButtonClicked}>Order Now</button>
                        </div>
                */