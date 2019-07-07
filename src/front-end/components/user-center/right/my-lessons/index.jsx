/**
 * MyLessons组件
 * @Component MyLessonsComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import SingleItem from "../../../common/single-item"
import LoadingComponent from "../../../common/loading"
import GetListModel from "../../../../model/get-list"

class MyLessonsComponent extends React.Component {
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
      <div className='my-lessons'>
        <div className='my-header' />
        <ul className='item-list'>
          {_.map(data.recommend.list, (item, key) => {
            return <SingleItem result={item} key={key} />
          })}
        </ul>
      </div>
    )
  }
}

export default MyLessonsComponent
