import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Categories } from './Components/Categories'
import { Products } from './Components/Products'

function App() {


  return (
    <>
    <Navbar />
    <div className='display'>
      <div className='category'>
        <Categories/>
      </div>
      <div className= " productDisplay">
        <Products/>
      </div>
      
    </div>
    
    </>
  )
}

export default App
