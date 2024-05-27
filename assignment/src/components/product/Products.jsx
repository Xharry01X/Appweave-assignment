import React from 'react'
import "./Product.css"
import Filter from '../filter/Filter'

const Products = () => {
  return (
    <div className='desgin'>
     <div className="left-filter">
      <Filter/>

     </div>
     <div className="right">
      Products screen
     </div>
    </div>
  )
}

export default Products
