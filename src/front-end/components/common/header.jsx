/**
 * 页面公共头部
 * @Component Header
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import './../../resource/css/header.less'
import { Menu, Input } from 'antd'
import logoWhite from './../../resource/svg/logo_white.svg'
import { MENU } from './../../common/text'
import Login from './../common/login/index'
import { utils } from './../../common/utils'
const Search = Input.Search
class Header extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      current: utils.getPageCode()
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
              selectedKeys={[this.state.current]}
              mode="horizontal" // 导航条的方向
            >
              {_.map(MENU, item => {
                return (
                  <Menu.Item key={item.key}>
                    <a href={'/' + item.key}>{item.title}</a>
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
          <Login />
        </div>
      </header>
    )
  }
}

export default Header
