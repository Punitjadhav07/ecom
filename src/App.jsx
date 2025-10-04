import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './Storage/store'
import { Navbar } from './Components/Navbar'
import { Categories } from './Components/Categories'
import { Products } from './Components/Products'
import { ProductDetail } from './Components/ProductDetail'
import { Cart } from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className='display'>
              <div className='category'>
                <Categories/>
              </div>
              <div className='productDisplay'>
                <Products/>
              </div>
            </div>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
