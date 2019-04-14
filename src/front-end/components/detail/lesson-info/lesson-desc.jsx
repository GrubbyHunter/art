/**
 * 视频课程介绍组件
 * @Component LessonDescComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"

class LessonDescComponent extends React.Component {
  render() {
    let className = this.props.visible ? "lesson-desc" : "lesson-desc hidden"

    return <div className={className}>课程概况</div>
  }
}

export default LessonDescComponent
