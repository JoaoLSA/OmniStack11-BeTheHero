import axios from 'axios'

const api = axios.create({
  baseURL: '{SEUIP}:3333',
})

export default api
