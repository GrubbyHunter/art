import React from "react"
import "antd/dist/antd.css"
import "./../../resource/css/common.less"
import "./../../resource/css/index.less"
import banner001 from "./../../resource/img/banner001.jpg"
import banner002 from "./../../resource/img/banner002.jpg"
import banner003 from "./../../resource/img/banner003.jpg"
import banner004 from "./../../resource/img/banner004.jpg"
import { Carousel } from "antd"

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Carousel autoplay>
          <div>
            <img src={banner001} />
          </div>
          <div>
            <img src={banner002} />
          </div>
          <div>
            <img src={banner003} />
          </div>
          <div>
            <img src={banner004} />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Index
