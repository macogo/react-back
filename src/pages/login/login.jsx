import React, { Component } from 'react';
import {
  Layout, Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './login.scss';

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push('/');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout className="login-container">

        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>$hang</h1>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
          </Form.Item>
        </Form>
        <p className="copy-right">© 2019 Created by $hang</p>
      </Layout>
    );
  }
}

Login = Form.create({ name: 'normal_login' })(Login);