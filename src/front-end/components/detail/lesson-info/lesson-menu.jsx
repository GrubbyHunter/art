/**
 * 视频课程目录组件
 * @Component LessonMenuComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"

class LessonMenuComponent extends React.Component {
  render() {
    let className = this.props.visible ? "lesson-menu" : "lesson-menu hidden"

    return (
      <div className={className}>
        <ul>
          <li>
            <h3>章节1：线稿回执的基础讲解</h3>
            <ul>
              <li>1-1 免费试听课程 20:15</li>
              <li>1-2 光影理论讲解 23:17</li>
            </ul>
          </li>
          <li>
            <h3>章节1：线稿回执的基础讲解</h3>
            <ul>
              <li>1-1 免费试听课程 20:15</li>
              <li>1-2 光影理论讲解 23:17</li>
            </ul>
          </li>
          <li>
            <h3>章节1：线稿回执的基础讲解</h3>
            <ul>
              <li>1-1 免费试听课程 20:15</li>
              <li>1-2 光影理论讲解 23:17</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default LessonMenuComponent
