import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/', // match Django URLs
  timeout: 5000,
})

// Attach JWT access token to headers automatically
api.interceptors.request.use(config => {
  const access = localStorage.getItem('access_token')
  if (access) {
    config.headers['Authorization'] = `Bearer ${access}`
  }
  return config
})

export default api
