/**
 * 前端缓存，sessionStorage级别存储
 * @author Grubby
 */

let AbstractStorage = require('AbstractStorage')
class SessionStroage extends AbstractStorage {
  constructor() {
    super()
    this.proxy = window.sessionStorage
    this.saveTime = "15M"
  }
}

module.exports = new SessionStroage()