/**
 * 首页InfoItem组件
 * @Component InfoItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { TAB } from "./../../common/text"
import Item from "./item"

class InfoItemComponent extends React.Component {
  render() {
    let { item } = this.props

    return (
      <div className="info-container" name={item.key}>
        <h2>{item.title}</h2>
        {this.renderInfoTag()}
        {this.renderItemList()}
      </div>
    )
  }

  renderInfoTag() {
    return (
      <div className="info-tag">
        <ul className="info-tag-ul">
          <li key="01">场景动画</li>
          <li key="02">UI设计</li>
          <li key="03">UI设计</li>
          <li key="04">UI设计</li>
        </ul>
        <a className="tag-more">查看更多</a>
      </div>
    )
  }

  renderItemList() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
      <ul className="item-list">
        {_.map(a, (item, key) => {
          return <Item key={key} />
        })}
      </ul>
    )
  }
}

export default InfoItemComponent
