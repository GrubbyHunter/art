/**
 * 课程容器组件
 * @Component LessionInfoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import Lesson from "./lesson"
import Author from "./author"

class LessionInfoComponent extends React.Component {
  render() {
    return (
      <div className="lesson-info">
        <Lesson />
        <Author />
      </div>
    )
  }
}

export default LessionInfoComponent