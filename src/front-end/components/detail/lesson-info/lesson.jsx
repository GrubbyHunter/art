/**
 * 课程容器组件
 * @Component LessionIndexComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import LessonDesc from "./lesson-desc"
import LessonMenu from "./lesson-menu"
import { Menu } from "antd"
const DESC = 1,
  MENU = 2

class LessonIndexComponent extends React.Component {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.setState({
      descVisible: true,
      menuVisible: false,
      current: "1"
    })
  }

  render() {
    let { descVisible, menuVisible } = this.state

    return (
      <div className="lesson-info f-l">
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal" // 导航条的方向
        >
          <Menu.Item key="1" onClick={this.handleClickTab.bind(this, DESC)}>
            课程概述
          </Menu.Item>
          <Menu.Item key="2" onClick={this.handleClickTab.bind(this, MENU)}>
            目录
          </Menu.Item>
        </Menu>
        <LessonDesc visible={descVisible} />
        <LessonMenu visible={menuVisible} />
      </div>
    )
  }

  handleClickTab(index) {
    if (index == DESC) {
      this.setState({
        descVisible: true,
        menuVisible: false,
        current: "1"
      })
      return
    }

    this.setState({
      descVisible: false,
      menuVisible: true,
      current: "2"
    })
  }
}

export default LessonIndexComponent
