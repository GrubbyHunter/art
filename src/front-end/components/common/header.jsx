/**
 * 页面公共头部
 * @Component Header
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { MENU } from "./../../common/text"
import "./../../resource/css/header.less"
import { Menu } from "antd"

class Header extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      current: "index"
    })
  }

  render() {
    return (
      <header id="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal" // 导航条的方向
        >
          {_.map(MENU, (item, key) => {
            return (
              <Menu.Item key={key}>
                <a href="" target="_blank">
                  {item.title}
                </a>
              </Menu.Item>
            )
          })}
        </Menu>
      </header>
    )
  }
}

export default Header
