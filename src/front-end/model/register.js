/**
 * 注册公共服务
 * @Component register
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
import { code } from '../common/data'
class Register extends Ajax {
  constructor() {
    super()
    this.name = 'register'
    this.url = 'student/register'
  }

  setParam(param) {
    this.data = param

    return this
  }

  dataFormat(data) {
    let message = '',
      status = true

    if (!data.static) {
      message = data.content
      status = false
    }

    return {
      status,
      message
    }
  }
}

let model = new Register()

export default model
