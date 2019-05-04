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
    let request = GetListModel.fetch().then(
      data => {
        debugger
      },
      error => {
        debugger
      }
    )
  }

  render() {
    return (
      <div className="info-list">
        {_.map(TAB, (item, key) => {
          return <InfoItem item={item} key={key} />
        })}
      </div>
    )
  }
}

export default InfoListComponent
