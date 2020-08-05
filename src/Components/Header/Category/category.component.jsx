import React from 'react';
import { Menu,} from 'antd';

const { SubMenu } = Menu;

const handleClick = e => {
  console.log('click ', e);
};

function Category(params) {
    

    return (
      <Menu onClick={handleClick} mode="horizontal" >
      <SubMenu title="Category" key="2">
        <Menu.Item title="1"> 1</Menu.Item>
        <SubMenu title="2">
      <Menu.Item>1rd menu item</Menu.Item>
      <Menu.Item>2th menu item</Menu.Item>
    </SubMenu>
        <Menu.Item title="3">3</Menu.Item>
        <Menu.Item title="4">4</Menu.Item>
        <Menu.Item title="5">5</Menu.Item>

    </SubMenu>
    </Menu>
);

}
export default Category;