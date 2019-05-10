/**
 * 产品详情页容器组件
 * @Component IndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import 'antd/dist/antd.css'
import './../../resource/css/common.less'
import './../../resource/css/detail.less'
import BreadCrumb from './bread-crumb'
import VideoInfo from './video-info/index'
import LessonInfo from './lesson-info/index'
import GetDetailModel from '../../model/get-lesson-detail'
import GetVideoModel from '../../model/get-lesson-video'
import Loading from '../common/loading'

class Index extends React.Component {
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
      cid: '123',
      section: '1',
      token: '',
      mode: '2019888'
    }).fetch(
      data => {
        this.setState(
          _.extend(this.state, {
            video: data.videoname
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
      return <Loading />
    }

    return (
      <div className="detail">
        <BreadCrumb />
        <VideoInfo detail={detail} video={video} />
        <LessonInfo detail={detail} />
      </div>
    )
  }
}

export default Index
