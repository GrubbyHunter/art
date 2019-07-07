/**
 * loading组件
 * @Component LoadingComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import { Spin } from "antd"
import { USER_LIST } from "../../common/data"
import { utils } from "../../common/utils"
import MyInfoComponent from "./right/my-info"
import MyFavComponent from "./right/my-fav"
import MyLessonsComponent from "./right/my-lessons"

class ContentComponent extends React.Component {
  componentWillMount() {
    let param = utils.getUrlParam()

    this.setState({
      type: param.get("type")
    })
  }
  render() {
    let { type } = this.state
    let ComponentUI = null
    let { myInfo, myFav, myLessons } = USER_LIST

    switch (type) {
      case myInfo.key:
        ComponentUI = MyInfoComponent
        break
      case myFav.key:
        ComponentUI = MyFavComponent
        break
      case myLessons.key:
        ComponentUI = MyLessonsComponent
        break
    }

    return (
      <div className='content-info'>
        <ComponentUI />
      </div>
    )
  }
}

export default ContentComponent
