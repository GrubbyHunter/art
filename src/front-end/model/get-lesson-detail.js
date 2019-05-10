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

  dataFormat(list) {
    if (!list) {
      return {}
    }

    let recommend = { list: [], tags: {} },
      second = { list: [], tags: {} },
      third = { list: [], tags: {} }

    _.each(list, item => {
      let tagNameBy2D = C_TYPE['2D'][item.couid]
      let tagNameBy3D = C_TYPE['3D'][item.couid]

      if (item.mark == 1) {
        recommend.list.push(item)
        if (tagNameBy2D || tagNameBy3D) {
          recommend.tags[item.couid] = tagNameBy2D || tagNameBy3D
        }
      }

      if (tagNameBy2D) {
        second.list.push(item)
        second.tags[item.couid] = tagNameBy2D
      }

      if (tagNameBy3D) {
        third.list.push(item)
        third.tags[item.couid] = tagNameBy3D
      }
    })

    return { recommend, second, third }
  }
}

let model = new GetList()

export default model
