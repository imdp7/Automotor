import React, {useState, useEffect} from 'react';
import Cards from './Card-items/Card-items.component'
import Carosel from '../Carousel/carousel.component'
import { Card } from 'antd';



const gridStyle = {
    width: '25%',
    height:'55vh',
    textAlign: 'center',
    bottom:'0'
  };

  
function CardItem({props}) {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  }, []);

 
  
  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
      const items = await data.json();
      console.log(items); 
      setItems(items);
  };

    return ( 
      
      <div>
      <Carosel/>
      <Card title="Shop Best Sellers" style={{textAlign:'center', fontSize:'1em', height:'auto'
      }} >
      {items.map(item =>(
        <Card.Grid style={gridStyle} key={item.id}><Cards item={item}/></Card.Grid>
        ))}
        
      </Card>
      </div>
      
     );
}

export default CardItem;