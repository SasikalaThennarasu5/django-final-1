import React, {useEffect, useState} from 'react'
import api from '../utils/api'
import ProductCard from '../components/ProductCard'

/*
  ProductList demonstrates:
   - axios GET request to /products/
   - basic loading and error handling
   - pagination awareness (DRF PageNumberPagination)
*/

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    // axios returns a promise; we use async call inside.
    api.get('products/')
      .then(res => {
        if (!mounted) return
        // DRF returns paginated result: {results: [...], count: n}
        setProducts(res.data.results || res.data)
      })
      .catch(err => {
        console.error(err)
        setError('Failed to fetch products')
      })
      .finally(() => setLoading(false))

    return () => mounted = false
  }, [])

  if (loading) return <div>Loading products...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
