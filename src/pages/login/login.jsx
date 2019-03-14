import React, { Component } from 'react';
import {
  Layout, Form, Icon, message, Input, Button, Checkbox,
} from 'antd';
import { connect } from 'react-redux';
import sha1 from 'sha1';
import API from '@/api/api';

import './login.scss';

export default class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const params = this.props.form.getFieldsValue();
        params.password = sha1(params.password);
        delete params.remember;
        try {
          let result = await API.loginByUser(params);
          if (result.code === 1000) {
            this.props.history.push('/');
          } else {
            message.error(result.msg);
          }

        } catch (err) {
          console.error(err);
        }
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
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
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
