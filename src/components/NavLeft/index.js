import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import MenuConfig from "../../config/menuConfig";

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: ""
    };
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    });
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
