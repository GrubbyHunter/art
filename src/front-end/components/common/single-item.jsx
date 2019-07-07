/**
 * 一个元素占一行的Item组件
 * @Component ItemComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { img_data } from "../../common/data"
import userHeader from "./../../resource/img/user_header.jpg"

class ItemComponent extends React.Component {
  render() {
    let { result } = this.props
    if (_.isEmpty(result)) {
      return null
    }

    let { adimg, cname, jianjie, lsname } = result

    return (
      <li onClick={this.handleClick}>
        <div className='item-img'>
          <img src={img_data.origin + adimg} />
        </div>
        <div className='item-title'>
          <div className='lesson-title'>
            <div className='title'>
              <div className='left'>{cname}</div>
              <div className='right'>付费</div>
            </div>
            <div className='count'>24节课</div>
          </div>
          <div className='lesson-name'>
            <div className='left'>看到 色彩把握运用 12:23</div>
            <div className='right'>
              <img src={userHeader} />
              <span>主讲人：{lsname}</span>
            </div>
          </div>
        </div>
      </li>
    )
  }

  handleClick() {
    window.location.href = "/detail.html"
  }
}

export default ItemComponent
