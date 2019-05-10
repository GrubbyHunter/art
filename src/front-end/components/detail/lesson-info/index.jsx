/**
 * 课程容器组件
 * @Component LessionInfoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Lesson from './lesson'
import Author from './author'

class LessonInfoComponent extends React.Component {
  render() {
    let { detail } = this.props

    return (
      <div className="lesson">
        <Lesson detail={detail} />
        <Author detail={detail} />
      </div>
    )
  }
}

export default LessonInfoComponent
