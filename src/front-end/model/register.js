/**
 * 注册公共服务
 * @Component register
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'

class Register extends Ajax {
  constructor() {
    super()
    this.name = 'register'
    this.url = 'student/register'
  }

  setParam(param) {
    this.param = param

    return this
  }

  dataFormat(data) {
    return data
  }
}

let model = new Register()

export default model
