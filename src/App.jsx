import { useState } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './Storeage/store'
import { Navbar } from './Components/Navbar'
import { Categories } from './Components/Categories'
import { Products } from './Components/Products'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className='display'>
        <div className='category'>
          <Categories/>
        </div>
        <div className='productDisplay'>
          <Products/>
        </div>
      </div>
    </Provider>
  )
}

export default App
