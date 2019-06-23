import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import LoginModel from '../../../model/login'
class NormalLoginForm extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      loading: false
    })
  }
  handleSubmit(e) {
    let { showAlert, hideAlert } = this.props
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        this.setState({
          loading: true
        })

        let { username, password } = values
        LoginModel.setParam({
          account: username,
          password
        }).fetch(
          data => {
            if (data.status) {
              showAlert(
                '登录成功',
                '提示',
                () => {
                  window.location.reload()
                },
                () => {
                  window.location.reload()
                }
              )
            } else {
              showAlert(
                data.message || '登录失败请重试',
                '提示',
                hideAlert,
                hideAlert
              )
            }

            this.setState({
              loading: false
            })
          },
          error => {
            console.log('登录失败', error)

            this.setState({
              loading: false
            })
          }
        )
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    let { registerNow } = this.props
    let { loading } = this.state

    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <a className="register-now" onClick={registerNow}>
            现在注册
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {loading ? (
              <Icon type="loading" style={{ fontSize: 24 }} spin />
            ) : (
              '登录'
            )}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default LoginForm
