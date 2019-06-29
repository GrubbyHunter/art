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
import GetListModel from '../../model/get-list'
import { BreadCrumbComponent } from './bread-crumb'
import { ListComponent } from './list-container'
import LoadingComponent from '../common/loading'
import Tab from './tab'
class Index extends React.Component {
  componentWillMount() {
    this.setState({
      recommend: {},
      second: {},
      third: {},
      loading: true
    })

    GetListModel.fetch(
      data => {
        this.setState({ data, loading: false })
      },
      error => {
        console.error('请求列表失败', error)
      }
    )
  }

  render() {
    let { data, loading } = this.state
    return (
      <div className="list">
        <BreadCrumbComponent />
        {loading ? null : <Tab data={data} />}
        {loading ? (
          <LoadingComponent />
        ) : (
          <ListComponent list={data.second.list} />
        )}
      </div>
    )
  }
}

export default Index
