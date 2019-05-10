/**
 * 产品详情页容器组件
 * @Component LoadingComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Spin } from 'antd'

class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="loading-content">
        <Spin size="large" />
      </div>
    )
  }
}

export default LoadingComponent
