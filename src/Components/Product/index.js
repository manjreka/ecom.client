import React from 'react'
import { Component } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import ProductCard from '../ProductCard'
import Footer from '../Footer'

import './index.css'
class Product extends Component {
    state = {productList: []}

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async() => {
        const url = 'http://localhost:4070/products'
        const options = {
            headers: {
              Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWUwZjM1OTQ5YTNjZDBkMjExYTU0YSIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdVSlhneHJ4VkNNSEFjamhKTUpsYy42MG9GRFFyb1lzM1JZRkJudmJFU1ZWNEV3UTMzS1VXIiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJENySGFmLncxUFpPdkQzVkxHL1ZDVk9zRzQzUWlCdHprbWlRZjBrS3NsSmtXRHpYRHpIZ3RXIiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjgzNTY4LCJleHAiOjE3MjU1NjM1Njh9.N2Vf2NmA-BZ4ngRg0PcOnUwt3p4r0y8IdxNPIV13GvU'}`,
            },
            method: 'GET',
          }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok){
            console.log(data)
            this.onSubmitSuccess(data.products)
        }
        else{
            this.onSubmitFailure(data.message)
        }
    }

    onSubmitSuccess = (list) => {
        this.setState ({productList: list})
    }

    onSubmitFailure = (msg) => {
        alert(`${msg}`)
    }


    render() {
        const {productList} = this.state
        
        return (
            <div>
                <Header />
                <hr style={{ borderTop: '0.2px solid lightGrey' }} />
                <div className='sub-container'>
                    <SideBar />
                    <div style = {{margin: '15px', padding: '15px'}} >
                        <h1>Product </h1>
                        <ul className='product-container'>
                            {productList.map(each => (<ProductCard key={each._id} details={each} />))}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Product