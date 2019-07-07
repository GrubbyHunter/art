/**
 * MyFav组件
 * @Component MyFavComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import Item from "../../../common/item"
import LoadingComponent from "../../../common/loading"
import GetListModel from "../../../../model/get-list"

class MyFavComponent extends React.Component {
  componentWillMount() {
    this.setState({
      recommend: {},
      second: {},
      third: {},
      loading: true
    })

    GetListModel.fetch(
      data => {
        this.setState({ data, loading: false })
      },
      error => {
        console.error("请求列表失败", error)
      }
    )
  }

  render() {
    let { data, loading } = this.state
    if (loading) {
      return <LoadingComponent />
    }

    return (
      <div className='my-fav'>
        <div className='my-header' />
        <ul className='item-list'>
          {_.map(data.recommend.list, (item, key) => {
            return <Item result={item} key={key} />
          })}
        </ul>
      </div>
    )
  }
}

export default MyFavComponent
