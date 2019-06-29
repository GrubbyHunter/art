/**
 * 首页Tab组件
 * @Component TabComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import { Tabs } from 'antd'
import { TAB } from './../../common/text'
const { TabPane } = Tabs
TAB.splice(0, 0, { title: '全部分类', key: 'all' })

class TabComponent extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      current: 'recommend'
    })
  }

  render() {
    let { data } = this.props
    let allTags = {}
    _.each(data, item => {
      allTags = _.extend(allTags, item.tags)
    })

    return (
      <div className="tab-container">
        <Tabs defaultActiveKey="all" onChange={null}>
          {_.map(TAB, (item, key) => {
            let tags = []
            if (item.key == 'all') {
              tags = allTags
            } else {
              tags = data[item.index].tags
            }

            return (
              <TabPane tab={item.title} key={item.key}>
                {_.map(tags, (item, key) => {
                  return (
                    <a
                      className="child-type"
                      href={`list.html?type=${key}`}
                      key={key}
                    >
                      {item}
                    </a>
                  )
                })}
              </TabPane>
            )
          })}
        </Tabs>
      </div>
    )
  }
}

export default TabComponent
