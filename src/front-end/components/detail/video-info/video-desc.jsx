/**
 * 视频相关描述组件
 * @Component VideoDescComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Button } from "antd"

class VideoDescComponent extends React.Component {
  render() {
    return (
      <div className='video-desc'>
        <div className='f_l'>
          <div className='video-title'>日系角色绘制基础课 VIP免费</div>
          <div className='video-author'>
            <span>2293在学</span>
            <span>讲师：XXX</span>
          </div>
        </div>
        <div className='f_r'>
          <div className='video-num'>
            <span className='video-price'>¥198.00</span>
            <span className='video-tips'>购买单套课程</span>
          </div>
          <Button type='primary'>立即购买</Button>
        </div>
      </div>
    )
  }
}

export default VideoDescComponent
