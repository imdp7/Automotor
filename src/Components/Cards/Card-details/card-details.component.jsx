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

 const CardDetails =  ({match},items) =>{
  const {Title, Price, Image,Body} = items;
   const CartCtx = useContext(CartContext);

  useEffect(() => {
    fetchItem(); 
  }, );
  
  const [item, setItem] = useState({});
    const fetchItem = async () => {
    // eslint-disable-next-line no-template-curly-in-string
    const apiRoot = `http://localhost:4000/products?Handle=${match.params.Handle}`;
    axios
    .get(apiRoot)
    .then((res) => {
    const item = res.data
    setItem(item);
    });
  };

        return (

  <div>
    <Row>
    <Col span={12} style={gridStyle}>

       <img src={Image} alt={Title} height="600px" width="550px" />
    <Divider dashed />
      <Descriptions title="Product Description"  size="middle">
        <Descriptions.Item >
          {Body}
        </Descriptions.Item>
      </Descriptions>
    </Col>
    <Col span={12} style={gridStyle}>

    <h1>{Title}</h1>

            <RawForm/>
          <h2>Price: {Price}</h2>
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
