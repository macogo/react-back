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
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default class List extends Component {

  async componentDidMount() {
    try {
      let result = await API.getTable();
      if (result.code === 1000) {

      } else {

      }

    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Nav pageId={this.props.route.path} currentOpenKey="sub1" />
          <Layout style={{ padding: '20px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280
            }}
            >
              <Table columns={columns} dataSource={data} size="middle" />
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}


