/**
 * 面包屑组件
 * @Component TopBarComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import Item from '../common/item'

export class ListComponent extends React.Component {
  render() {
    let { list } = this.props

    return (
      <ul className="item-list">
        {_.map(list, (item, key) => {
          return <Item result={item} key={key} />
        })}
      </ul>
    )
  }
}
