/**
 * 公共参数文件
 * @Component data.js
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
const origin = 'http://111.67.206.67'
let data = {
  max_tags: 4, //首页二级分类最多放4个标签
  max_index_list: 8, // 首页一个列表最多放8个
  img_data: {
    origin: `${origin}:21916/adimg/`
  },
  video_data: {
    origin: `${origin}:21916/video/`
  },
  login_type: {
    login: 'login',
    register: 'register'
  },
  code: {
    error: 500,
    success: 200
  },
  store: {
    userInfo: 'USER_INFO'
  }
}
module.exports = data
