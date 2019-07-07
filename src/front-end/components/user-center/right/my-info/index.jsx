/**
 * MyInfo组件
 * @Component MyInfoComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Tabs } from "antd"
import UserEditComponent from "./user-edit"

const { TabPane } = Tabs
const TAB_INFO = {
  user: { title: "个人信息", key: "user" },
  password: { title: "修改密码", key: "password" }
}

class MyInfoComponent extends React.Component {
  render() {
    let { user, password } = TAB_INFO

    return (
      <div className='my-info'>
        <Tabs defaultActiveKey={user.key} onChange={null}>
          <TabPane tab={user.title} key={user.key}>
            <UserEditComponent />
          </TabPane>
          <TabPane tab={password.title} key={password.key}>
            456
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default MyInfoComponent
