import React, { Component } from 'react';
import { Menu} from 'antd';
import './header.scss'
export default class Header extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <div className="logo" >$hang</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </div>

    )
  }
}