/**
 * 首页容器组件
 * @Component IndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import 'antd/dist/antd.css'
import './../../resource/css/common.less'
import './../../resource/css/index.less'
import Banner from './banner'
import InfoList from './info-list'
import Tab from './tab'

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <Tab />
        <InfoList />
      </div>
    )
  }
}

export default Index
