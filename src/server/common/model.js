const axios = require('axios')
const qs = require('qs')
const api = {
  async get(url, data) {
    try {
      let res = await axios.get(url, { params: data })
      res = res.data
      return new Promise(resolve => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      alert('服务器出错')
      console.log(err)
    }
  },

  async post(url, data) {
    try {
      let res = await axios.post(url, data)
      res = res.data

      return new Promise((resolve, reject) => {
        resolve(res)
      })
    } catch (err) {
      alert(`${url}服务器出错`)
      console.log(err)
    }
  }
}
module.export = api
