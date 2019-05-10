/**
 * 视频课程目录组件
 * @Component LessonMenuComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'

class LessonMenuComponent extends React.Component {
  render() {
    let { detail, visible } = this.props
    let className = visible ? 'lesson-menu' : 'lesson-menu hidden'

    return (
      <div className={className}>
        <ul className="menu-list">
          {_.map(detail.kcjianjie, (item, index) => {
            return this.renderChild(item, index)
          })}
        </ul>
      </div>
    )
  }

  renderChild(item, index) {
    return (
      <li key={index}>
        <h3>
          章节{item.section}：{item.stitle}
        </h3>
        <ul>
          <li>
            <div className="f-l">1-1 免费试听课程</div>
            <div className="f-r">20:15</div>
          </li>
          <li>
            <div className="f-l">1-2 光影理论讲解</div>
            <div className="f-r">23:17</div>
          </li>
        </ul>
      </li>
    )
  }
}

export default LessonMenuComponent
