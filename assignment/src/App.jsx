import React from "react"

import Header from "./components/Header/Header"
import Products from "./components/product/Products"
import SearchBar from "./components/searchBar/SearchBar"

function App() {
  

  return (
    <>
    

   
    {/* header-content=TeeRex Store,Products cart icon */}
    {/* searchbar- Search for products */}
    {/* cateogy with filter by given condition */}
    {/* products section-Name,image,price,AddtocartButton */}
    <Header/>
    <SearchBar/>
    <Products/>
    </>
  )
}

export default App
