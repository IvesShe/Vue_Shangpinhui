import axios from "axios";
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 請求攔截器
requests.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

// 響應攔截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  return Promise.reject(new Error('fail'))
})

export default requests