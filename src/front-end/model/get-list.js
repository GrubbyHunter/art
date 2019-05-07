/**
 * 请求列表接口 公共服务
 * @Component getList
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
import { C_TYPE } from './../common/text'
class GetList extends Ajax {
  constructor() {
    super()
    this.name = 'GET_LIST'
    this.url = 'course/lists'
  }

  setParam(param) {
    this.param = param

    return this
  }
}

let model = new GetList()

export default model
