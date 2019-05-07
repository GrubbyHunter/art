/**
 * 首页InfoList组件
 * @Component InfoListComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { TAB } from './../../common/text'
import InfoItem from './info-item'
import GetListModel from '../../model/get-list'
class InfoListComponent extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      recommend: {},
      second: {},
      third: {}
    })

    GetListModel.fetch(
      data => {
        this.setState(data)
      },
      error => {
        console.error('请求列表失败', error)
      }
    )
  }

  render() {
    let { recommend, second, third } = this.state

    return (
      <div className="info-list">
        {this.renderItem(recommend, TAB[0])}
        {this.renderItem(second, TAB[1])}
        {this.renderItem(third, TAB[2])}
      </div>
    )
  }

  renderItem(result, tab) {
    if (!result) {
      return null
    }

    if (_.isEmpty(result.list) || _.isEmpty(result.tags)) {
      return null
    }

    return <InfoItem result={result} tab={tab} />
  }
}

export default InfoListComponent
