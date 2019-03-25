/**
 * 请求列表接口 公共服务
 * @Component getList
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from "./ajax"
class GetList extends Ajax {
  constructor(){
    super()
    this.name = "GET_LIST"
    this.url = "fetch/get/list"
  }

  setParam(param) {
    this.param = param

    return this
  }

}
module.exports = new GetList()