import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await api.post('users/login/', { username, password })
      const { access, refresh } = res.data.token

      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)
      localStorage.setItem('username', res.data.user.username)

      navigate('/') // redirect after login
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
