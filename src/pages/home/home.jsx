import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/header/header';
import Nav from '../components/sider/sider';
// import API from '@/api/api';
import './home.less';

const {
  Content,
} = Layout;

export default class Home extends Component {

  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Nav />
          <Layout style={{ padding: '20px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280
            }}
            >
              <p>content</p>
        </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}


