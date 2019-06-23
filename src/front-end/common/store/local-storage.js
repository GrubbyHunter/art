/**
 * 前端缓存，localStorage级别存储
 * @author Grubby
 */

import AbstractStorage from './abstract'

class LocalStorage extends AbstractStorage {
  constructor() {
    super()
    this.proxy = window.localStorage
    this.saveTime = '120M'
  }
}

export default new LocalStorage()
