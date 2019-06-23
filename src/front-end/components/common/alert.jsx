import { Modal } from 'antd'
import React from 'react'

class Alert extends React.Component {
  handleOk(e) {
    this.props.onOk()
  }

  handleCancel(e) {
    this.props.onCancel()
  }

  render() {
    let { message, visible, title } = this.props

    if (!visible) {
      return null
    }

    return (
      <div>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          okText="确定"
          cancelText="取消"
        >
          <div>{message}</div>
        </Modal>
      </div>
    )
  }
}

export default Alert
