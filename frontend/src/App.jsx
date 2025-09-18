import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import AdminDashboard from './pages/AdminDashboard'

/*
  App.jsx defines routes for multiple pages. Each page is in src/pages/.
  Routes:
    /           -> Home
    /products   -> Product listing
    /product/:id-> Product details
    /cart       -> Shopping cart
    /login      -> Login page
    /register   -> Register new user
    /checkout   -> Checkout (create order)
    /admin      -> Basic admin dashboard (front-end demo)
*/

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <footer className="bg-white border-t py-4 text-center">
        <div className="container mx-auto">© 2025 E-commerce AmazonCart</div>
      </footer>
    </div>
  )
}
