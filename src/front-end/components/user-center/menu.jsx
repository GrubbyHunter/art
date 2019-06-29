/**
 * loading组件
 * @Component LoadingComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Spin } from 'antd'
import { utils } from '../../common/utils'
const USER_LIST = [
  { title: '我的课程', key: 'myLessons' },
  { title: '我的收藏', key: 'myFav' },
  { title: '我的订单', key: 'myOrder' },
  { title: '资料设置', key: 'myInfo' },
  { title: '帮助中心', key: 'help' }
]
class MenuComponent extends React.Component {
  componentWillMount() {
    let param = utils.getUrlParam()

    this.setState({
      active: param.get('type')
    })
  }

  render() {
    let { active } = this.state

    return (
      <div className="menu-info">
        <ul>
          <li>
            <a className="user-center-title">个人中心</a>
          </li>
          {_.map(USER_LIST, (item, index) => {
            return (
              <li key={index} className={item.key === active ? 'active' : ''}>
                <a href={`/user-center.html?type=${item.key}`}>{item.title}</a>
              </li>
            )
          })}
          <li />
          <li />
        </ul>
      </div>
    )
  }
}

export default MenuComponent
