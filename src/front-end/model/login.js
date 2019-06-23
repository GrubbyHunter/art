/**
 * 登录服务
 * @Component register
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
import localStore from '../common/store/local-storage'
import { store } from '../common/data'
class Login extends Ajax {
  constructor() {
    super()
    this.name = 'register'
    this.url = 'student/login'
  }

  setParam(param) {
    this.data = param

    return this
  }

  dataFormat(data) {
    let message = '',
      status = true
    let { nickname, token, uid, type } = data

    if (!data.static) {
      message = data.content
      status = false
    } else {
      debugger
      localStore.set(store.userInfo, {
        nickname,
        token,
        uid,
        type
      })
    }

    return {
      status,
      message,
      nickname,
      token,
      uid,
      type
    }
  }
}

let model = new Login()

export default model
