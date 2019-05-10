/**
 * 请求列表接口 公共服务
 * @Component getList
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import Ajax from './ajax'
class GetLessonVideo extends Ajax {
  constructor() {
    super()
    this.name = 'GET_LESSON_VIDEO'
    this.url = 'course/content'
  }

  setParam(param) {
    this.data = param

    return this
  }

  dataFormat(data) {
    return data
  }
}

let model = new GetLessonVideo()

export default model
