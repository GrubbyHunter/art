/**
 * 产品详情页容器组件
 * @Component IndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import "antd/dist/antd.css"
import "./../../resource/css/common.less"
import "./../../resource/css/detail.less"
import TopBar from "./top-bar"

class Index extends React.Component {
  render() {
    return (
      <div className='main'>
        <TopBar />
      </div>
    )
  }
}

export default Index
