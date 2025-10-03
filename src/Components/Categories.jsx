import React from 'react'
import '../css/category.css'
export const Categories = () => {
  const categories = ['All', 'Clothes', 'Electronics', 'Furnitures', 'Shoes', 'Others'];

  return (
    <div className='categories'>
      {categories.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </div>
  )
}