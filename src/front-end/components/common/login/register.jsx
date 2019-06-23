import { Form, Input, Select, Checkbox, Button, Icon } from 'antd'
import React from 'react'
const { Option } = Select
import RegisterModel from '../../../model/register'

class RegistrationForm extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      confirmDirty: false,
      loading: false,
      autoCompleteResult: []
    })
  }

  handleSubmit(e) {
    let { showAlert, loginNow, hideAlert } = this.props

    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        let { email, nickname, password, phone } = values

        this.setState({
          loading: true,
          regMessage: ''
        })

        RegisterModel.setParam({
          account: email,
          password,
          email,
          nickname,
          phone,
          secret: ''
        }).fetch(
          data => {
            if (data.status) {
              showAlert(
                '注册成功，立即登录',
                '提示',
                () => {
                  loginNow()
                  hideAlert()
                },
                hideAlert
              )
            } else {
              showAlert(
                data.message || '注册失败请重试',
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
            console.log('注册失败', error)

            this.setState({
              loading: false
            })
          }
        )
      }
    })
  }

  handleConfirmBlur(e) {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword(rule, value, callback) {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两个密码不一致！')
    } else {
      callback()
    }
  }

  validateToNextPassword(rule, value, callback) {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  validatorPhone(rule, value, callback) {
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
      callback('请输入有效手机号')
    }
    callback()
  }

  validatorChecked(rule, value, callback) {
    if (!value) {
      callback('请勾选注册条款')
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    )
    let { loading } = this.state

    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit.bind(this)}
        className="register-form"
      >
        <Form.Item label="">
          {getFieldDecorator('email', {
            validateTrigger: 'onBlur',
            rules: [
              {
                type: 'email',
                message: '请输入有效的电子邮箱'
              },
              {
                required: true,
                message: '请输入电子邮箱'
              }
            ]
          })(<Input placeholder="请输入电子邮箱" />)}
        </Form.Item>
        <Form.Item label="" hasFeedback>
          {getFieldDecorator('password', {
            validateTrigger: 'onBlur',
            rules: [
              {
                required: true,
                message: '请输入密码'
              },
              {
                validator: this.validateToNextPassword.bind(this)
              }
            ]
          })(<Input.Password placeholder="请输入密码" />)}
        </Form.Item>
        <Form.Item label="" hasFeedback>
          {getFieldDecorator('confirm', {
            validateTrigger: 'onBlur',
            rules: [
              {
                required: true,
                message: '请再次输入密码'
              },
              {
                validator: this.compareToFirstPassword.bind(this)
              }
            ]
          })(
            <Input.Password
              placeholder="请再次输入密码"
              onBlur={this.handleConfirmBlur.bind(this)}
            />
          )}
        </Form.Item>
        <Form.Item label="">
          {getFieldDecorator('nickname', {
            validateTrigger: 'onBlur',
            rules: [
              {
                required: true,
                message: '请输入昵称',
                whitespace: true
              }
            ]
          })(<Input placeholder="请输入昵称" />)}
        </Form.Item>

        <Form.Item label="">
          {getFieldDecorator('phone', {
            validateTrigger: 'onBlur',
            rules: [
              {
                validator: this.validatorPhone.bind(this)
              }
            ]
          })(
            <Input
              addonBefore={prefixSelector}
              placeholder="请输入电话号码"
              style={{ width: '100%' }}
            />
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            validateTrigger: 'onBlur',
            valuePropName: 'checked',
            rules: [
              {
                validator: this.validatorChecked.bind(this)
              }
            ]
          })(
            <Checkbox>
              我已同意此网站<a href="">注册条款</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            {loading ? (
              <Icon type="loading" style={{ fontSize: 24 }} spin />
            ) : (
              '注册'
            )}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const RegisterForm = Form.create({ name: 'register' })(RegistrationForm)

export default RegisterForm
