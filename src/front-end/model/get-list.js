/**
 * 请求列表接口 公共服务
 * @Component getList
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'

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

  // 格式化数据
  dataFormat(data) {
    if (!data) {
      return []
    }
  }
}

let model = new GetList()

export default model
