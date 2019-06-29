/**
 * 基础工具类
 * @author Grubby
 */
let utils = {
  getPageCode: () => {
    let arr = window.location.pathname.split('/')

    if (!arr || arr.length < 2) {
      return 'index'
    }

    return arr[1] ? arr[1] : 'index'
  }
}

export { utils }
