/**
 * 视频相关描述组件
 * @Component VideoDescComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Button } from 'antd'

class VideoDescComponent extends React.Component {
  render() {
    let { detail } = this.props

    return (
      <div className="video-desc">
        <div className="f-l">
          <div className="video-title">{detail.lsjianjie}</div>
          <div className="video-author">
            <span>2293在学</span>
            <span>讲师：{detail.lsname}</span>
          </div>
        </div>
        <div className="f-r">
          <div className="video-num">
            <div className="video-price f-l">¥198.00</div>
            <div className="video-tips f-r">购买单套课程</div>
          </div>
          <Button type="primary">立即购买</Button>
        </div>
      </div>
    )
  }
}

export default VideoDescComponent
