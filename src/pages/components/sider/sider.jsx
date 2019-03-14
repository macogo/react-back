import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;


export default class Nav extends Component {

  handleClick = ({ item, key, selectedKeys }) => {

  }

  render() {
    return (
      <Sider width={240} style={{ height: '100%' }}>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          theme='dark'
          style={{ height: '100%', borderRight: 0 }}
          defaultOpenKeys={[this.props.currentOpenKey]}
          selectedKeys={[this.props.pageId.replace(/\//g, '')]}
        >
          <Menu.Item key="home">
            <Link to='/' replace>
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="list"><Link to='/list' replace>Notice</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

