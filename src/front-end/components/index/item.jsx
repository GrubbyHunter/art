/**
 * 首页Item组件
 * @Component ItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Icon } from "antd"
import demo001 from "./../../resource/img/demo001.jpg"
import userHeader from "./../../resource/img/user_header.jpg"

class ItemComponent extends React.Component {
  render() {
    return (
      <li onClick={this.handleClick}>
        <div className='item-img'>
          <img src={demo001} />
          <div className='lesson-count'>24节课</div>
        </div>
        <div className='item-title'>
          <div className='lesson-title'>日式插画厚涂入门基础课</div>
          <div className='teacher'>
            <img src={userHeader} />
            <div className='teacher-name'>主讲人: 林斌</div>
            <div className='play-num'>
              <Icon type='eye' />
              <span>1237</span>
            </div>
          </div>
        </div>
      </li>
    )
  }

  handleClick() {
    window.location.href = "/detail"
  }
}

export default ItemComponent
