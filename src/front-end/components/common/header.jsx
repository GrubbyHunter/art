/**
 * 页面公共头部
 * @Component Header
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import "./../../resource/css/header.less"
import { Menu, Input, Button } from "antd"
import logoWhite from "./../../resource/svg/logo_white.svg"
import { MENU } from "./../../common/text"

const Search = Input.Search
class Header extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      current: "index"
    })
  }

  render() {
    return (
      <header id="header">
        <div className="header-container">
          <div className="header-logo">
            <a href="/">
              <img src={logoWhite} alt="logo" />
            </a>
          </div>
          <div className="header-center">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal" // 导航条的方向
            >
              {_.map(MENU, item => {
                return (
                  <Menu.Item key={item.key}>
                    <a href="" target="_blank">
                      {item.title}
                    </a>
                  </Menu.Item>
                )
              })}
            </Menu>
            <Search
              placeholder="漫画"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
          </div>
          <div className="header-right">
            <Button>注册</Button>
            <Button type="primary">登录</Button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
