/**
 * 关于作者组件
 * @Component AuthorComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'

class AuthorComponent extends React.Component {
  render() {
    return (
      <div className="author f-r">
        <div className="author-desc">讲师介绍</div>
        <div className="author-info">
          <div className="logo" />
          <div className="author-name">大大</div>
        </div>
        <div className="product-name">讲师作品</div>
        <div className="product-list" />
      </div>
    )
  }
}

export default AuthorComponent
