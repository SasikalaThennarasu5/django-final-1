import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*
  Cart page reads the cart from localStorage and shows totals.
  Checkout button navigates to /checkout where we POST to create an order.
*/

export default function Cart(){
  const [cart,setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  function removeItem(index){
    const newCart = [...cart]
    newCart.splice(index,1)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const total = cart.reduce((s,i)=>(s + (i.price * i.quantity)),0)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cart.length===0 ? (
        <div>
          <p>Your cart is empty. <Link to="/products" className="text-indigo-600">Shop now</Link></p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow flex items-center justify-between">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm">Qty: {item.quantity}</div>
              </div>
              <div className="text-right">
                <div>₹{item.price * item.quantity}</div>
                <button onClick={()=>removeItem(idx)} className="text-red-500 text-sm mt-2">Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold">Total: ₹{total.toFixed(2)}</div>
          <div className="text-right">
            <button onClick={()=>navigate('/checkout')} className="px-4 py-2 bg-indigo-600 text-white rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}
