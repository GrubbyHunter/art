/**
 * 公共文字内容
 * @Component text.js
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */

let text = {
  MENU: [
    { title: '首页', key: 'index' },
    { title: '课程分类', key: 'classes' },
    { title: '特训教室', key: 'classroom' },
    { title: '讲师', key: 'teacher' },
    { title: '学员作业', key: 'student' }
  ],

  TAB: [
    { title: '推荐课程', key: 'recommend' },
    { title: '3D课程', key: '3D' },
    { title: '2D课程', key: '2D' }
  ],

  C_TYPE: {
    '2D': {
      '21': '绘画软件',
      '22': '动漫插画',
      '23': '角色原画',
      '24': '场景原画',
      '25': '传统绘画',
      '26': '游戏UI'
    },
    '3D': {
      '31': '游戏角色设计',
      '32': '场景设计',
      '33': '游戏特效设计',
      '34': '动画设计'
    }
  }
}
module.exports = text
