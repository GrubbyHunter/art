/**
 * 数据缓存抽象类，提供可以继承的get，set和remove方法
 * @author Grubby
 */
const defaultCacheTime = '15M' // 默认缓存时间
const fullTime = 'yyyy/MM/dd hh:mm:ss'
const timeUnit = {
  D: 'D', // 天
  H: 'H', // 小时
  M: 'M', // 分钟
  S: 'S' //秒
}
const verson = 'atr'
import UtilDate from '../util-date'

export default class AbstractStorage {
  constructor() {
    this.proxy = null
    this.saveTime = ''
  }

  initialize(options) {
    _.extend(this, options)
  }

  get(key) {
    let tag = verson
    let result = unserialize(this.proxy.getItem(key))
    if (_.isEmpty(result)) {
      return null
    }

    // 版本对不上，删除本地无效数据
    if (result.tag !== tag) {
      this.remove(key)
      return null
    }

    // 时间已过期，删除本地无效数据
    if (!isValidExpires(result.expires)) {
      this.remove(key)
      return null
    }

    return result.value
  }

  /**
   * @desc 保存缓存数据
   */
  set(key, value) {
    // 版本号
    let tag = verson
    let saveTimeStr = conversionTime(this.saveTime)

    this.proxy.setItem(
      key,
      serialize({
        expires: saveTimeStr,
        value,
        tag
      })
    )
  }

  /**
   * @desc 移除缓存数据
   */
  remove(key) {
    this.proxy.removeItem(key)
  }
}

/**
 * @desc 判断缓存时间是否有效
 * @param {String} expiresTime 过期时间字符串 2017/03/13 17:30:12
 *
 */
function isValidExpires(expiresTime) {
  if (_.isEmpty(expiresTime)) {
    return false
  }
  let nowMilliseconds = new UtilDate().getTime()
  let expiresMilliseconds = new UtilDate(expiresTime).getTime()

  if (expiresMilliseconds > nowMilliseconds) {
    return true
  }

  return false
}

/**
 * @desc 保存时间转化，将字符串转化为时间
 * @param {String} saveTime 保存时长，默认为15分钟(15m)
 *        单位：D-天，H-小时，M-分钟, S-秒
 */
function conversionTime(saveTime) {
  if (_.isEmpty(saveTime)) {
    saveTime = defaultCacheTime
  }

  // 时间单位，这里不区分大小写
  let unit = _.last(saveTime),
    milliseconds,
    num
  switch (unit.toUpperCase()) {
    case timeUnit.D:
      milliseconds = 24 * 60 * 60 * 1000
      break
    case timeUnit.H:
      milliseconds = 60 * 60 * 1000
      break
    case timeUnit.M:
      milliseconds = 60 * 1000
      break
    case timeUnit.S:
      milliseconds = 1000
      break
  }

  try {
    num = parseInt(saveTime.substring(0, saveTime.length - 1), 10)
  } catch (e) {
    console.error('invalid saveTime', e)
    num = 1
  }

  // 最终需要保存的时长毫秒
  milliseconds = milliseconds * num
  let nowMilliseconds = new UtilDate().getTime()
  let saveDate = new UtilDate(nowMilliseconds + milliseconds).format(fullTime)

  return saveDate
}

// 序列化成可以存储的json字符串
function serialize(jsonObj) {
  let str = ''
  if (_.isEmpty(jsonObj)) {
    return str
  }

  try {
    str = JSON.stringify(jsonObj)
  } catch (e) {
    console.error('serialize fail because:', e)
  }
  return str
}

// 反序列化成json对象
function unserialize(jsonStr) {
  let jsonObj = {}
  if (_.isEmpty(jsonStr)) {
    return jsonObj
  }

  try {
    jsonObj = JSON.parse(jsonStr)
  } catch (e) {
    console.error('unserialize fail because:', e)
  }
  return jsonObj
}
