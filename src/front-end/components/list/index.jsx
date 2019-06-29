/**
 * 首页容器组件
 * @Component IndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import 'antd/dist/antd.css'
import './../../resource/css/common.less'
import './../../resource/css/list.less'
import GetResultModel from '../../model/get-result'
import { BreadCrumbComponent } from './bread-crumb'
import { ListComponent } from './list-container'
import LoadingComponent from '../common/loading'
import Tab from './tab'
class Index extends React.Component {
  componentWillMount() {
    this.setState({
      list: [],
      loading: true
    })

    GetResultModel.fetch(
      data => {
        this.setState({ list: data, loading: false })
      },
      error => {
        console.error('请求列表失败', error)
      }
    )
  }

  render() {
    let { list, loading } = this.state
    return (
      <div className="list">
        <BreadCrumbComponent />
        <Tab />
        {loading ? <LoadingComponent /> : <ListComponent list={list} />}
      </div>
    )
  }
}

export default Index
