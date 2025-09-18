import React from 'react'
import ProductList from './ProductList'

/*
  Home simply shows a hero section and the product list component.
  This keeps code DRY (Don't Repeat Yourself) because ProductList is reused.
*/

export default function Home(){
  return (
    <div>
      

      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <ProductList />
    </div>
  )
}
