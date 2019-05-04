/**
 * 视频容器组件
 * @Component VideoIndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Video from './video'
import VideoDesc from './video-desc'
import VideoDirectory from './video-directory'

class VideoIndexComponent extends React.Component {
  render() {
    return (
      <div className="video-info">
        <div className="video-detail">
          <Video />
          <VideoDirectory />
        </div>
        <VideoDesc />
      </div>
    )
  }
}

export default VideoIndexComponent
