import React, {useContext}  from 'react';
import { Button,message } from 'antd';
import CardDetails from '../Card-details/card-details.component'
//import CardDetails from '../Card-details/card-details.component'
import {Link} from 'react-router-dom'
import './Card-items.styles.scss'
import { CartContext} from '../../../Context/context'


function Cards  ({item }){
  const {title, price, image,id} = item;
  const CartCtx = useContext(CartContext)
  
  const key = 'updatable';
  const removeMessage = () => {
    message.loading({ content: 'Removing...', key });
    setTimeout(() => {
     message.error({ content: 'Removed from Cart!', key, duration: 2 });
  }, 1000);
};

    return (
      
      <div>
      <Link to={`/Product/${id}`}><img className="card-img-top" variant="top" src={image} height="200px" width="150px" alt="1"/></Link>
      <div className="details">
      <Link to={`Product/${id}`}><h3>{title}</h3></Link>
        <h3>${price}</h3>

        <div className="buttonx">
        <Link to={`/Product/${id}`}><Button className="cartbutton" key={id} onClick={<CardDetails/>} >View Product</Button></Link>
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