/**
 * 首页Item组件
 * @Component ItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Icon } from "antd"

class ItemComponent extends React.Component {
  render() {
    return (
      <li>
        <div className="item-img">
          <img />
          <div className="lesson-count">24节课</div>
        </div>
        <div className="item-title">
          <div className="lesson-title" />
          <div className="teacher">
            <img />
            <div className="teacher-name">主讲人: 林斌</div>
            <div className="play-num">
              <Icon type="eye" />
              <span>1237</span>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default ItemComponent
