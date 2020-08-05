import React from 'react'
import  './header.styles.scss'
import { Layout, Menu} from 'antd';
import {ShoppingCartOutlined,HomeOutlined,} from  '@ant-design/icons';
import LoginModal from '../User/Log.component';
import {Link} from 'react-router-dom'
import Category from './Category/category.component'
import SearchBar from './Search/search.component'

const menuItem={
  fontSize:"1.075em",
};
const { Header } = Layout;

const Head = () => {
    return(

    <Layout>
    <Header style={{ position: 'fixed', zIndex: 10, width: '100%',textAlign:'center'}}>
      <div className="logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        id="101"
        style={{display:'block', alignContent:"space-between",textAlign:'center',padding:'none'}}>
        <Menu.Item key="1" icon={<HomeOutlined/>} style={menuItem}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Category/></Menu.Item>
        <Menu.Item><Link to="/Company" style={menuItem}>Company</Link></Menu.Item>
         <Menu.Item disabled ><SearchBar/></Menu.Item>
        <Menu.Item key="4" className="cart" style={menuItem}><Link to="/Cart"><ShoppingCartOutlined style={{ fontSize: '20px'}}/>Cart</Link></Menu.Item>
        <Menu.Item key="5" className="cart" style={menuItem}><LoginModal/></Menu.Item>

    </Menu>
    </Header>
  </Layout>

  );
}

export default Head;