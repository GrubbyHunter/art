/**
 * 首页InfoItem组件
 * @Component InfoItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Item from './item'
import { max_tags } from './../../common/data'
class InfoItemComponent extends React.Component {
  render() {
    let { result, tab } = this.props

    return (
      <div className="info-container">
        <a className="h-title" name={tab.key}>
          {tab.title}
        </a>
        {this.renderInfoTag(result.tags)}
        {this.renderItemList()}
      </div>
    )
  }

  renderInfoTag(tags) {
    let length = 0

    return (
      <div className="info-tag">
        <ul className="info-tag-ul">
          {_.map(tags, (tag, index) => {
            length++
            // 最多只展示4个标签
            if (length > max_tags) {
              return null
            }

            return <li key={index}>{tag}</li>
          })}
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
