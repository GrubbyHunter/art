/**
 * 页面公共头部
 * @Component Header
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React, { Component } from "react"
import { MENU } from "./../../common/text"
class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          {_.map(MENU, (item, key) => {
            return <li key={key}>{item.title}</li>
          })}
          <li />
        </ul>
      </header>
    )
  }
}

export default Header
