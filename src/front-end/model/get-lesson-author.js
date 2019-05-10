/**
 * 请求列表接口 获取课程作者相关信息
 * @Component getLessonAuthor
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
import { C_TYPE } from '../common/text'
class GetLessonAuthor extends Ajax {
  constructor() {
    super()
    this.name = 'GET_LESSON_AUTHOR'
    this.url = 'course/details'
  }

  setParam(id) {
    this.url = this.url + '/' + id

    return this
  }

  dataFormat(data) {
    return data
  }
}

let model = new GetLessonAuthor()

export default model
