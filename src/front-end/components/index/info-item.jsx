/**
 * 首页InfoItem组件
 * @Component InfoItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Item from './item'
import { max_tags, max_index_list } from './../../common/data'
class InfoItemComponent extends React.Component {
  render() {
    let { result, tab } = this.props

    return (
      <div className="info-container">
        <a className="h-title" name={tab.key}>
          {tab.title}
        </a>
        {this.renderInfoTag(result.tags)}
        {this.renderItemList(result.list)}
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

  renderItemList(list) {
    list = list.slice(0, max_index_list)

    return (
      <ul className="item-list">
        {_.map(list, (item, key) => {
          return <Item result={item} key={key} />
        })}
      </ul>
    )
  }
}

export default InfoItemComponent
