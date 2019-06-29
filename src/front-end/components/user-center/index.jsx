/**
 * 首页容器组件
 * @Component IndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import 'antd/dist/antd.css'
import './../../resource/css/common.less'
import './../../resource/css/user-center.less'
import Menu from './menu'
import Content from './content'

class Index extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className="user-center">
        <Menu />
        <Content />
      </div>
    )
  }
}

export default Index
