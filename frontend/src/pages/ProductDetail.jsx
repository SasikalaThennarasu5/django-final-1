import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../utils/api'

/*
  ProductDetail fetches a single product and allows adding to cart (stored in localStorage).
  Teaching notes are in comments.
*/

export default function ProductDetail(){
  const { id } = useParams()
  const [product,setProduct] = useState(null)
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  function addToCart(){
    // Cart is a simple array kept in localStorage for the demo.
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existing = cart.find(i => i.product_id === product.id)
    if (existing) existing.quantity += 1
    else cart.push({product_id: product.id, name: product.name, price: product.price, quantity: 1})
    localStorage.setItem('cart', JSON.stringify(cart))
    navigate('/cart')
  }

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="md:flex gap-6">
        <img className="w-full md:w-1/3 h-64 object-cover rounded" src={product.image_url || 'https://via.placeholder.com/600x400'} alt={product.name} />
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <div className="mt-4 font-bold text-xl">₹{product.price}</div>
          <button onClick={addToCart} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
