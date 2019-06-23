/**
 * 前端缓存，内存级别存储，F5刷新就会消失
 * @author Grubby
 */

let AbstractStorage = require('AbstractStorage')
let MemoryData = {
  getItem(key) {
    return this[key]
  },

  setItem(key, value) {
    this[key] = value
  },

  /**
   * @desc 移除缓存数据
   */
  removeItem(key) {
    delete this[key]
  }
}

class MemoryStroage extends AbstractStorage {
  constructor() {
    super()
    this.proxy = MemoryData
    this.saveTime = "15M"
  }
}

module.exports = new MemoryStroage()