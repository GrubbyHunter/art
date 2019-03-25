/**
 * 首页InfoList组件
 * @Component InfoListComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { TAB } from "./../../common/text"
import InfoItem from "./info-item"
class InfoListComponent extends React.Component {
  render() {
    debugger
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
