import axios from 'axios'

const api = axios.create({
    baseURL:"https://api.convertkit.com/v3/"
})

export default api