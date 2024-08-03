import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import Order from './Components/order'

import './index.css'

const App = () => {
  return (
    <Switch>
      <Route exact path = '/' component = {Product}/>
      <Route exact path = '/product/:id' component = {ProductDetails} />
      <Route exact path = '/cart' component = {Cart} />
      <Route exact path = '/order' component = {Order} />
    </Switch>
  )
}

export default App