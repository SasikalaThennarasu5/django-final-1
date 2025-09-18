import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await api.post('users/register/', {
        username: form.username,
        email: form.email,
        password: form.password
      })
      navigate('/login') // redirect to login
    } catch (err) {
      console.error(err)
      setError(
        err.response?.data?.username?.[0] ||
        err.response?.data?.password?.[0] ||
        err.response?.data?.email?.[0] ||
        err.response?.data?.non_field_errors?.[0] ||
        'Registration failed'
      )
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create account</h2>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Email (optional)</label>
          <input
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
