import React from 'react'
import { Link } from 'react-router-dom'

/*
  ProductCard displays product brief info and links to detail page.
  Uses tailwind classes for quick, attractive UI.
*/

export default function ProductCard({product}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {/* <img src={product.image_url || 'https://via.placeholder.com/300x200?text=No+Image'} alt={product.name} className="h-40 w-full object-cover rounded" /> */}
      <div className="mt-3 flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description?.slice(0,80)}{product.description && product.description.length>80?'...':''}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">₹{product.price}</div>
        <Link to={`/product/${product.id}`} className="text-indigo-600">View</Link>
      </div>
    </div>
  )
}
