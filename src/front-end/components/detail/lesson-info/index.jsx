/**
 * 课程容器组件
 * @Component LessionInfoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Lesson from './lesson'
import Author from './author'
import GetDetailModel from '../../../model/get-lesson-detail'
import GetVideoModel from '../../../model/get-lesson-video'
import { Spin } from 'antd'
class LessonInfoComponent extends React.Component {
  componentWillMount() {
    this.setState({
      detail: {},
      video: ''
    })

    GetDetailModel.setParam(123).fetch(
      data => {
        this.setState(
          _.extend(this.state, {
            detail: data
          })
        )
      },
      error => {
        console.log('获取课程详情失败', error)
      }
    )

    GetVideoModel.setParam({
      uid: '',
      cid: '',
      section: '',
      token: '',
      mode: '2019888'
    }).fetch(
      data => {
        this.setState(
          _.extend(this.state, {
            video: data
          })
        )
      },
      error => {
        console.log('获取课程视频失败', error)
      }
    )
  }

  render() {
    let { detail, video } = this.state

    if (_.isEmpty(detail) || _.isEmpty(video)) {
      return (
        <div>
          <Spin size="large" />
        </div>
      )
    }

    return (
      <div className="lesson">
        <Lesson />
        <Author />
      </div>
    )
  }
}

export default LessonInfoComponent
