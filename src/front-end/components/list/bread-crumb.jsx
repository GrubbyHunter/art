/**
 * 面包屑组件
 * @Component TopBarComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Breadcrumb } from 'antd'
export class BreadCrumbComponent extends React.Component {
  render() {
    return (
      <Breadcrumb separator=">">
        <Breadcrumb.Item>课程分类</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#1">日系角色绘制基础</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#1">1、线稿绘制</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
