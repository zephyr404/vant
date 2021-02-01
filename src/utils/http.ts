import axios from 'axios';

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.chen97.cn:3000'
// axios.defaults.baseURL = G ? G.url : process.env.VUE_APP_BASE_API
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const http = {
  get(url: any, params: any = {}, headers: any = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        headers: headers
      })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        })
    })
  },

  post(url: any, data: any = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  },

  put(url: any, data: any = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  },

  delete(url: any, data: any = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, { data: data })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  }
}

export { http }
