/**
 * ajax 公共服务
 * @Component Ajax
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
/**
 * @param [string] name	接口名称。
 * @param [boolean] async	布尔值，表示请求是否异步处理。默认是 true。
 * @param [string] url	规定发送请求的 URL。
 * @param [function] beforeSend(xhr)发送请求前运行的函数。
 * @param [function] complete(xhr,status)	请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。
 * @param [string] contentType	发送数据到服务器时所使用的内容类型。默认是："json"
 * @param [object] data	规定要发送到服务器的数据。
 * @param [string] dataType	发送数据到服务器时所使用的内容类型。默认是："json"
 * @param [function] error(xhr,status,error)	如果请求失败要运行的函数。
 * @param [function] success(result,status,xhr)	当请求成功时运行的函数。
 * @param [int] timeout	设置本地的请求超时时间（以毫秒计）,默认20s。
 * @param [string] type	规定请求的类型（GET 或 POST），默认post。
 */
export default class Ajax {
  constructor() {
    this.origin = 'http://111.67.206.67:21915/'
    this.url = ''
    this.async = true
    this.beforeSend = () => console.log(`开始发起${name}请求`)
    this.data = {}
    this.name = ''
    this.dataType = 'json'
    this.timeout = 2000
    this.type = 'POST'
  }

  setParam(data) {
    this.data = data
    return this
  }

  fetch(successFun, errorFun) {
    let {
      url,
      async,
      type,
      dataType,
      data,
      timeout,
      beforeSend,
      dataFormat
    } = this

    if (_.isEmpty(url)) {
      alert(`请求链接不能为空`)
      return
    }

    $.ajax({
      url: this.origin + url,
      async,
      type,
      dataType,
      data,
      timeout,
      beforeSend: () => beforeSend(),
      success: data => {
        // 返回之前先格式化数据
        data = dataFormat(data)
        successFun(data)
      },
      error: errorFun
    })
  }
}
