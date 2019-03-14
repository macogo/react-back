import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/header/header';
import Nav from '../components/sider/sider';
import Bar from '../components/charts/bar';
// import Pie from '../components/charts/pie';
// import API from '@/api/api';
import './home.scss';

const {
  Content,
} = Layout;


export default class Home extends Component {
  state = {
    current: Bar
  }

  render() {
    const Compon = this.state.current;
    return (
      <Layout>
        <Header />
        <Layout>
          <Nav pageId='/home' currentOpenKey="home" />
          <Layout style={{ padding: '20px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280
            }}
            >
              content
              {/* Dynamic components */}
              {/* {<Compon />} */}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}


