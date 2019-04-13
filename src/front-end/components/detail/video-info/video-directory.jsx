/**
 * 视频目录组件
 * @Component VideoDirectoryComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Menu } from "antd"
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class VideoDirectoryComponent extends React.Component {
  render() {
    return (
      <div className='video-directory'>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode='inline'
        >
          <SubMenu
            key='sub1'
            title={
              <span>
                <span>章节1：线稿回执的基础讲解</span>
              </span>
            }
          >
            <Menu.Item key='g1'>1-1 免费试听课程 20:15</Menu.Item>
            <Menu.Item key='g2'>1-2 光影理论讲解 23:17</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <span>章节2：线稿绘制的基础讲解</span>
              </span>
            }
          >
            <Menu.Item key='g3'>2-1 线基基础 20:15</Menu.Item>
            <Menu.Item key='g4'>2-2 光影理论讲解 23:17</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub3'
            title={
              <span>
                <span>章节3：线稿绘制的基础讲解</span>
              </span>
            }
          >
            <Menu.Item key='g5'>3-1 线基基础 20:15</Menu.Item>
            <Menu.Item key='g6'>3-2 光影理论讲解 23:17</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub4'
            title={
              <span>
                <span>章节4：线稿绘制的基础讲解</span>
              </span>
            }
          >
            <Menu.Item key='g7'>4-1 线基基础 20:15</Menu.Item>
            <Menu.Item key='g8'>4-2 光影理论讲解 23:17</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default VideoDirectoryComponent
