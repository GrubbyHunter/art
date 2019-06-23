/**
 * 登录
 * @Component LoginComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import './../../../resource/css/login.less'
import { Button, Modal, Tabs } from 'antd'
import { login_type } from '../../../common/data'
import Login from './login'
import Register from './register'

const { TabPane } = Tabs

class LoginComponent extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      ModalText: '',
      visible: false,
      confirmLoading: false,
      type: login_type.register // 默认显示注册
    })
  }

  showConfirm(type) {
    this.setState({
      visible: true,
      type
    })
  }

  handleCancel() {
    console.log('Clicked cancel button')
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="header-right">
        <Button onClick={this.showConfirm.bind(this, login_type.register)}>
          注册
        </Button>
        <Button
          onClick={this.showConfirm.bind(this, login_type.login)}
          type="primary"
        >
          登录
        </Button>
        {this.renderConfirm()}
      </div>
    )
  }

  renderConfirm() {
    const { visible, confirmLoading } = this.state

    return (
      <div>
        <Modal
          title={this.renderTab.apply(this)}
          visible={visible}
          onOk={this.handleOk.bind(this)}
          centered={true}
          width={400}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel.bind(this)}
          footer={null}
        />
      </div>
    )
  }

  renderTab() {
    return (
      <Tabs defaultActiveKey={login_type.register} onChange={null}>
        <TabPane tab="注册" key={login_type.register}>
          <Register />
        </TabPane>
        <TabPane tab="登录" key={login_type.login}>
          <Login />
        </TabPane>
      </Tabs>
    )
  }
}

export default LoginComponent
