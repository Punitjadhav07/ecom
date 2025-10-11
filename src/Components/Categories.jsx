import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Features/productSlice'
import '../css/category.css'

export const Categories = () => {
  const dispatch = useDispatch();
  const { selectedCategory, categories } = useSelector((state) => state.products);

  const handleCategoryClick = (categoryKey) => {
    dispatch(setCategory(categoryKey));
  };

  return (
    <div className='categories'>
      <h2 className='categories-title'>Categories</h2>
      <div className='categories-list'>
        {Object.entries(categories).map(([key, value]) => {
          let buttonClass;
          if (selectedCategory === key) {
            buttonClass = 'category-btn active';
          } else {
            buttonClass = 'category-btn';
          }
          return (
            <button 
              key={key} 
              className={buttonClass}
              onClick={() => handleCategoryClick(key)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  )
}