/**
 * 请求列表接口 获取课程作者相关信息
 * @Component GetLessonDetail
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
class GetLessonDetail extends Ajax {
  constructor() {
    super()
    this.name = 'GET_LESSON_DETAIL'
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

let model = new GetLessonDetail()

export default model
