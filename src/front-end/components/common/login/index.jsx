/**
 * 登录
 * @Component LoginComponent
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from 'react'
import './../../../resource/css/login.less'
import { Button, Modal, Tabs } from 'antd'
import { login_type, store } from '../../../common/data'
import localStore from '../../../common/store/local-storage'
import Login from './login'
import Register from './register'
import Alert from '../alert'

const { TabPane } = Tabs

class LoginComponent extends React.Component {
  UNSAFE_componentWillMount() {
    let userInfo = localStore.get(store.userInfo)

    this.setState({
      ModalText: '',
      visible: false,
      confirmLoading: false,
      type: login_type.register, // 默认显示注册
      alertVisible: false,
      alertMessage: '',
      isLogin: !_.isEmpty(userInfo) && !_.isEmpty(userInfo.token),
      name: userInfo ? userInfo.nickname : ''
    })
  }

  showAlert(message, alertTitle, onAlertOk, onAlertCancel) {
    this.setState({
      alertTitle,
      alertVisible: true,
      alertMessage: message,
      onAlertOk,
      onAlertCancel
    })
  }

  hideAlert() {
    this.setState({
      alertVisible: false,
      alertMessage: ''
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
    let {
      alertMessage,
      alertVisible,
      alertTitle,
      onAlertOk,
      isLogin,
      name
    } = this.state

    if (isLogin) {
      return (
        <div className="header-right">
          <span className="user-info">{name}</span>
        </div>
      )
    }

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
        <Alert
          title={alertTitle}
          visible={alertVisible}
          message={alertMessage}
          onOk={onAlertOk}
          onCancel={this.hideAlert.bind(this)}
        />
      </div>
    )
  }

  renderConfirm() {
    const { visible, confirmLoading } = this.state

    return (
      <div>
        <Modal
          wrapClassName="login-wrap"
          title={this.renderTab.apply(this)}
          visible={visible}
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
    let { type } = this.state

    return (
      <Tabs activeKey={type} onTabClick={this.showConfirm.bind(this)}>
        <TabPane tab="注册" key={login_type.register}>
          <Register
            loginNow={this.showConfirm.bind(this, login_type.login)}
            showAlert={this.showAlert.bind(this)}
            hideAlert={this.hideAlert.bind(this)}
          />
        </TabPane>
        <TabPane tab="登录" key={login_type.login}>
          <Login
            registerNow={this.showConfirm.bind(this, login_type.register)}
            showAlert={this.showAlert.bind(this)}
            hideAlert={this.hideAlert.bind(this)}
          />
        </TabPane>
      </Tabs>
    )
  }
}

export default LoginComponent
