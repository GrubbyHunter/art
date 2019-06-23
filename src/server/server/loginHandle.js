/**
 * @desc 登录系统中间件
 * @param {*} app
 */
let _ = require('lodash')
let API = require('../common/model')
const CONFIG = require('../common/config')
const { code } = CONFIG
let loginHandle = app => {
  app.post('/register', function(req, res) {
    console.log(req)
    console.log('-------')
    console.log(res)
    let { account, password, email, phone, nickname } = req.body

    if (
      _.isEmpty(account) ||
      _.isEmpty(password) ||
      _.isEmpty(email) ||
      _.isEmpty(phone) ||
      _.isEmpty(nickname)
    ) {
      res.json({ status: code.error, msg: '参数不能为空参数' })
      return
    }

    // 验证是否已注册
    API.post(CONFIG.register, {
      account,
      password,
      email,
      nickname,
      phone,
      secret: ''
    }).then(res => {
      if (res.static) {
        res.json({ status: code.success })
        return
      }
      res.json({ status: code.error, msg: res.content || '注册失败' })
    })
  })

  app.post('/login', function(req, res) {
    let { account, password } = req.body

    if (_.isEmpty(account) || _.isEmpty(password)) {
      res.json({ status: code.error, msg: '参数不能为空参数' })
      return
    }

    // 验证是否已注册
    API.post(CONFIG.login, {
      account,
      password
    }).then(res => {
      let { static: status, token, content, uid } = res

      if (status) {
        res.json({ status: code.success, token, uid })
        return
      }
      res.json({ status: code.error, msg: content || '登录失败' })
    })
  })

  app.post('/logout', function(req, res) {
    let { uid } = req.body

    if (_.isEmpty(uid)) {
      res.json({ status: code.error, msg: '参数不能为空参数' })
      return
    }

    // 验证是否已注册
    API.post(CONFIG.logout, {
      uid
    }).then(res => {
      let { static: status, content } = res

      if (status) {
        res.json({ status: code.success })
        return
      }
      res.json({ status: code.error, msg: content || '登录失败' })
    })
  })
}

module.exports = loginHandle
