/**
 * loading组件
 * @Component LoadingComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Spin } from "antd"
import { utils } from "../../common/utils"
import { USER_LIST } from "../../common/data"

class MenuComponent extends React.Component {
  componentWillMount() {
    let param = utils.getUrlParam()

    this.setState({
      active: param.get("type")
    })
  }

  render() {
    let { active } = this.state

    return (
      <div className='menu-info'>
        <ul>
          <li>
            <a className='user-center-title'>个人中心</a>
          </li>
          {_.map(USER_LIST, (item, index) => {
            return (
              <li key={index} className={index === active ? "active" : ""}>
                <a href={`/user-center.html?type=${index}`}>{item.title}</a>
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
