/**
 * 时间基础类，给子元素提供一系列操作时间的方法
 * @author Grubby
 */
export default class UtilDate {
  constructor(dateStr) {
    if (_.isString(dateStr) || _.isNumber(dateStr)) {
      try {
        this.date = new Date(dateStr)
      } catch (e) {
        console.error('create UtilDate error', e)
      }
    } else {
      this.date = new Date()
    }
  }

  getTime() {
    return this.date.getTime()
  }

  format(fmt) {
    let date = this.date
    let o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return fmt
  }
}
