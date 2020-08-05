import React, {useState, useEffect,useContext} from 'react';
import { Row, Col } from 'antd';
import {Button,Divider,Tooltip,Descriptions} from 'antd';
import { GoogleOutlined,PlusOutlined} from '@ant-design/icons';
import RawForm from './Form/form.component'
import './card-details.styles.scss'
import { CartContext} from '../../../Context/context'
// import MyGallery from '../Card-details/Image Thumbs/thumb.component'
import axios from 'axios'
const gridStyle = {
    padding:'20px'
};

 const CardDetails =  ({match}) =>{
   const CartCtx = useContext(CartContext);

  useEffect(() => {
    fetchItem(); 
  }, );
  
  const [item, setItem] = useState({});
    const fetchItem = async () => {
    const apiRoot = ('http://localhost:4000/products/_${match.params.Handle}');
    axios
    .get(apiRoot)
    .then((res) => {
    // const data = await fetch(`http://localhost:4000/products/_${match.params.Handle}`);
    //   const item = await data.json();
      setItem(item);
    });
  };

        return (

  <div>
    <Row>
    <Col span={12} style={gridStyle}>

       <img src={item.Image} alt={item.Title} height="600px" width="550px" />
    <Divider dashed />
      <Descriptions title="Product Description"  size="middle">
        <Descriptions.Item >
          {item.Body}
        </Descriptions.Item>
      </Descriptions>
    </Col>
    <Col span={12} style={gridStyle}>

    <h1>{item.Title}</h1>

            <RawForm/>
          <h2>Price: {item.Price}</h2>
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
