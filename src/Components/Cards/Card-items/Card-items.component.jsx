import React, {useContext}  from 'react';
import { Button } from 'antd';
import CardDetails from '../Card-details/card-details.component'
import {Link} from 'react-router-dom'
import './Card-items.styles.scss'
import { CartContext} from '../../../Context/context'

function Cards  ({ item }){
  const {Title, Price, Image,Handle} = item;
  const CartCtx = useContext(CartContext)
  
    return (
    
      <div>
      <Link to={`/Product/${Handle}`}><img className="card-img-top" variant="top" src={Image} height="200px" width="150px" alt="1"/></Link>
      <div className="details">
      <div>
      <Link to={`Product/${Handle}`}><span style={{fontSize:'1.205em'}}>{Title}</span></Link>
        <h3 style={{padding:'10px'}}>${Price}</h3>
        </div>
        <div>
        <div className="addtocart">
        <Link to={`/Product/${Handle}`}><Button className="cartbutton" key={Handle} onClick={<CardDetails/>} >View Product</Button></Link>
        </div>
        <div>
        {/* <Tooltip
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          placeholder="Input a number"
          maxLength={2}
          defaultValue="1"
          type="number"
          style={{width:'auto',margin:'10px'}}
          //onChange={(e) => CartCtx.addToCart(item)}
        />
        </Tooltip> */}
        <Button onClick={() => CartCtx.addToCart(item)}>Add to Cart</Button>
        </div>
        
        </div>
        </div>

    </div>


     );
}
 


export default Cards;