import React, {useContext}  from 'react';
import { Button,message } from 'antd';
import CardDetails from '../Card-details/card-details.component'
import {Link} from 'react-router-dom'
import './Card-items.styles.scss'
import { CartContext} from '../../../Context/context'


function Cards  ({ item, props}){
  const {Title, Price, Image,Handle} = item;
  const CartCtx = useContext(CartContext)
  
  const key = 'updatable';
  const removeMessage = () => {
    message.loading({ content: 'Removing...', key });
    setTimeout(() => {
     message.error({ content: 'Removed from Cart!', key, duration: 2 });
  }, 1000);
};

    return (
      
      <div style={{padding:'10px'}}>
      <Link to={`/Product/${Handle}`}><img className="card-img-top" variant="top" src={Image} height="200px" width="150px" alt="1"/></Link>
      <div className="details">
      <div>
      <Link to={`Product/${Handle}`}><h4 style={{fontSize:'1.205em'}}>{Title}</h4></Link>
        <h3 style={{padding:'10px'}}>${Price}</h3>
        </div>
        <div className="addtocart">
        <Link to={`/Product/${Handle}`}><Button className="cartbutton" key={Handle} onClick={<CardDetails/>} >View Product</Button></Link>
        <div className="addtocart">
        <Button onClick={() => CartCtx.addToCart(item)}>+</Button>
        <Button onClick={removeMessage}>-</Button>
        </div>
        </div>
      </div>
    </div>


     );
}
 


export default Cards;