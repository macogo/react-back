import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;


export default class Nav extends Component {
  state = {
    theme: 'dark',
    current: '1',
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Sider width={240} style={{ height: '100%' }}>
        <Menu
          mode="inline"
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ height: '100%', borderRight: 0 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="cloud" /><span>Navigation Four</span></span>}>
            <Menu.Item key="13">Option 13</Menu.Item>
            <Menu.Item key="14">Option 14</Menu.Item>
            <Menu.Item key="15">Option 15</Menu.Item>
            <Menu.Item key="16">Option 16</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="team" /><span>Navigation Five</span></span>}>
            <Menu.Item key="17">Option 17</Menu.Item>
            <Menu.Item key="18">Option 18</Menu.Item>
            <Menu.Item key="19">Option 19</Menu.Item>
            <Menu.Item key="20">Option 20</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}