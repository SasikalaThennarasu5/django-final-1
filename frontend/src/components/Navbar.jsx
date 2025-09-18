import React from 'react'
import { Link } from 'react-router-dom'

/*
  Simple Navbar using Tailwind utility classes.
  Comments explain structure for beginners.
*/

export default function Navbar() {
  const username = localStorage.getItem('username')
  const handleLogout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('username')
  window.location.href = '/login'  // redirect to login
}


  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">AmazonCart</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          {username ? (
            <>
              <span className="text-sm">Hello, {username}</span>
              <Link to="/admin" className="px-3 py-1 bg-indigo-600 text-white rounded">Admin</Link>
              <button onClick={handleLogout} className="px-3 py-1 border rounded">
  Logout
</button>

            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-indigo-600 text-white rounded">Sign up</Link>
              
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
