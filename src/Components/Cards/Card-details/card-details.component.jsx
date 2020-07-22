import React, {useState, useEffect} from 'react';
import { Row, Col } from 'antd';
import {Button,Divider,Tooltip,message} from 'antd';
import { GoogleOutlined,PlusOutlined} from '@ant-design/icons';
import RawForm from './Form/form.component'
import './card-details.styles.scss'



const gridStyle = {
    padding:'20px'
};

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Adding...', key });
  setTimeout(() => {
    message.success({ content: 'Added to Cart!', key, duration: 3 });
  }, 1000);
};

 const CardDetails =  ({match},props) =>{

  useEffect(() => {
    fetchItem(); 
  }, );
  
  const [item, setItem] = useState({});
  
  const fetchItem = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
      const item = await data.json();
      setItem(item);
     console.log(match.params.id); 
  };

        return (

  <div>
    <Row>
    <Col span={12} style={gridStyle}>
        <img src={item.url} alt={item.albumId} />
    <Divider dashed />
    </Col>
    <Col span={12} style={gridStyle}>

    <h1>{item.title}</h1>

            <RawForm/>

        <div className="container">
        <Tooltip title="Add to Cart" placement="bottom" color="red">
        <Button size='large' style={{width:'50%'}} type="primary" onClick={openMessage}><PlusOutlined />Add to Cart</Button></Tooltip>
        <Tooltip title="Buy with G-pay" placement="bottom" color="orange">
        <Button size='large' style={{width:'50%'}}><GoogleOutlined />Buy with G-pay</Button></Tooltip>
        </div>
      </Col>
    </Row> 
    </div>

);
  }
export default  CardDetails;
