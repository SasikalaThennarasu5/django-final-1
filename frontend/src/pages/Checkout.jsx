import React, {useState, useEffect} from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

/*
  Checkout reads cart from localStorage and posts to /orders/create/.
  It requires authentication: token must be present.
  Teaching note: server validates user is authenticated.
*/

export default function Checkout(){
  const [cart, setCart] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  function submitOrder(){
    setError(null)
    if (cart.length === 0) {
      setError('Cart empty')
      return
    }
    const items = cart.map(i => ({product_id: i.product_id, quantity: i.quantity}))
    api.post('orders/create/', {items})
      .then(res => {
        setSuccess('Order placed successfully!')
        localStorage.removeItem('cart')
        setTimeout(()=>navigate('/'), 1500)
      })
      .catch(err => {
        console.error(err)
        setError('Failed to place order. Are you logged in?')
      })
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      {cart.map((i,idx)=>(
        <div key={idx} className="flex justify-between py-2 border-b">
          <div>{i.name} (x{i.quantity})</div>
          <div>₹{(i.price * i.quantity).toFixed(2)}</div>
        </div>
      ))}
      <div className="text-right font-bold mt-4">Total: ₹{cart.reduce((s,i)=>(s + i.price * i.quantity),0).toFixed(2)}</div>
      {error && <div className="text-red-500 mt-3">{error}</div>}
      {success && <div className="text-green-600 mt-3">{success}</div>}
      <div className="mt-4 text-right">
        <button onClick={submitOrder} className="px-4 py-2 bg-indigo-600 text-white rounded">Place order</button>
      </div>
    </div>
  )
}
