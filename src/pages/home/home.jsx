import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../components/header/header';
import Nav from '../components/sider/sider';
// import Bar from '../components/charts/bar';
// import Pie from '../components/charts/pie';
// import API from '@/api/api';
import './home.scss';

const {
  Content,
} = Layout;

export default class Home extends Component {

  componentDidMount() { }
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
              content
              {/* <Row>
                <Col span={12}><Bar /></Col>
                <Col span={12}><Pie /></Col>
              </Row> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}


