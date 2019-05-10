/**
 * 视频目录组件
 * @Component VideoDirectoryComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class VideoDirectoryComponent extends React.Component {
  render() {
    let { detail } = this.props

    return (
      <div className="video-directory">
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {_.map(detail.kcjianjie, (item, index) => {
            return this.renderChild(item, index)
          })}
        </Menu>
      </div>
    )
  }

  renderChild(item, index) {
    return (
      <SubMenu
        key={index}
        title={
          <span>
            <span>
              章节{item.section}：{item.stitle}
            </span>
          </span>
        }
      >
        <Menu.Item key="g1">1-1 免费试听课程 20:15</Menu.Item>
        <Menu.Item key="g2">1-2 光影理论讲解 23:17</Menu.Item>
      </SubMenu>
    )
  }
}

export default VideoDirectoryComponent
