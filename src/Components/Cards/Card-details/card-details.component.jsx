import React, {useState, useEffect,useContext} from 'react';
import { Row, Col } from 'antd';
import {Button,Divider,Tooltip,Descriptions} from 'antd';
import { GoogleOutlined,PlusOutlined} from '@ant-design/icons';
import RawForm from './Form/form.component'
import './card-details.styles.scss'
import { CartContext} from '../../../Context/context'
// import MyGallery from '../Card-details/Image Thumbs/thumb.component'

const gridStyle = {
    padding:'20px'
};

 const CardDetails =  ({match},props) =>{
   const CartCtx = useContext(CartContext);

  useEffect(() => {
    fetchItem(); 
  }, );
  
  const [item, setItem] = useState({});
  
  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
      const item = await data.json();
      setItem(item);
  };

        return (

  <div>
    <Row>
    <Col span={12} style={gridStyle}>

       <img src={item.image} alt={item.title} height="600px" width="550px" />
    <Divider dashed />
      <Descriptions title="Product Description"  size="middle">
        <Descriptions.Item >
          {item.description}
        </Descriptions.Item>
      </Descriptions>
    </Col>
    <Col span={12} style={gridStyle}>

    <h1>{item.title}</h1>

            <RawForm/>

        <div className="container">
        <Tooltip title="Add to Cart" placement="bottom" color="red">
        <Button size='large' style={{width:'50%'}} type="primary" onClick= {() => CartCtx.addToCart(item)}><PlusOutlined />Add to Cart</Button></Tooltip>
        <Tooltip title="Buy with G-pay" placement="bottom" color="orange">
        <Button size='large' style={{width:'50%'}}><GoogleOutlined />Buy with G-pay</Button></Tooltip>
        </div>
      </Col>
    </Row> 
    </div>

);
  }
export default  CardDetails;
