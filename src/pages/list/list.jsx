import React, { Component } from 'react';
import { Layout, Table } from 'antd';
import Header from '../components/header/header';
import Nav from '../components/sider/sider';
import API from '@/api/api';
import './list.scss';

const {
  Content,
} = Layout;

const columns = [{
  title: 'ORG',
  dataIndex: 'pubOrg',
}, {
  title: 'Publisher',
  dataIndex: 'publisher',
}, {
  title: 'Date',
  dataIndex: 'pubDate',
}];


export default class List extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    try {
      let result = await API.getTable();
      this.setState({
        data: result.rbBulletins,
      });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Nav pageId={this.props.route.path} />
          <Layout style={{ padding: '20px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280
            }}
            >
              <Table rowKey={item => item.bulletinId} columns={columns} dataSource={this.state.data} size="middle" />
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}


