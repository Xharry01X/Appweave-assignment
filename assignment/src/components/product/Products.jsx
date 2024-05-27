import React from 'react'
import "./Product.css"
import Filter from '../filter/Filter'

const Products = () => {
  return (
    <div className='desgin'>
     <div className="left-filter">
      {/* filter has taken some area and product screen has some area 
      now you can filter out ont the basis of color */}
      <Filter/>

     </div>
     <div className="right">
      Products screen
     </div>
    </div>
  )
}

export default Products
