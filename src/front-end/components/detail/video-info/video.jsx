/**
 * 视频组件
 * @Component VideoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { video_data } from '../../../common/data'
class VideoComponent extends React.Component {
  render() {
    let { video } = this.props

    return (
      <video preload="preload" controls src={`${video_data.origin}${video}`} />
    )
  }
}

export default VideoComponent
