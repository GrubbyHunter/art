/**
 * 视频组件
 * @Component VideoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"

class VideoComponent extends React.Component {
  render() {
    return (
      <video
        preload='preload'
        controls
        src='https://v.qingwk.com/video/330d12db-167361a42f0-0004-dd8e-5a2-52edc.mp4'
      />
    )
  }
}

export default VideoComponent
