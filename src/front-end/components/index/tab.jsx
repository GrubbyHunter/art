/**
 * 首页Tab组件
 * @Component TabComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Menu } from "antd"
import { TAB } from "./../../common/text"

class TabComponent extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      current: "recommend"
    })
  }

  render() {
    return (
      <div className="tab-container">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal" // 导航条的方向
        >
          {_.map(TAB, item => {
            return (
              <Menu.Item key={item.key}>
                <a href={`#${item.key}`}>{item.title}</a>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    )
  }
}

export default TabComponent
