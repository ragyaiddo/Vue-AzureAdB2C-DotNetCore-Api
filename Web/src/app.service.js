import axios from 'axios'
import applicationConfig from './application.config'

axios.defaults.baseURL = applicationConfig.apiBaseUrl

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Origin, X-Auth-Token, X-Requested-With, Authorization, Content-Type, Accept'
axios.defaults.headers['Access-Control-Allow-Methods'] = 'HEAD, POST, GET, PUT, PATCH, DELETE, OPTIONS'

axios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('accessToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

const appService = {
  getTopics (categoryId) {
    return new Promise((resolve) => {
      axios.get(`topics/category/${categoryId}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
}

export default appService
