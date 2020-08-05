import React, {useState,useEffect} from 'react';
import Cards from './Card-items/Card-items.component'
import Carosel from '../Carousel/carousel.component'
import { Card,Skeleton } from 'antd';
import { useInfiniteScroll } from "react-infinite-scroll-hook";
import PropTypes from "prop-types";
import axios from 'axios'

const gridStyle = {
    width: 'auto',
    height:'auto',
    margin:'10px 10px',
    padding: '10px 0px',

    // textAlign:'center'
  };

  const ARRAY_SIZE = 32;
const RESPONSE_TIME = 100;

  function loadItems(prevArray = [], startCursor = 0) {
    return new Promise(resolve => {
      setTimeout(() => {
        let newArray = prevArray;
  
        for (let i = startCursor; i < startCursor + ARRAY_SIZE; i++) {
          const data = {
            key: i,
           
          };
          newArray = [...newArray, data];
        }
  
        resolve(newArray);
      }, RESPONSE_TIME);
    });
  }

 
function CardItem({scrollContainer}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoadMore()
  },[] );

  function handleLoadMore  ()  {
    setLoading(true);
    const apiRoot = 'http://localhost:4000/products?Type=Body Wash'
    axios.get(apiRoot).then((res) => {
      loadItems(items, items.length).then(newArray => {
       setItems([...res.data, ...items]);
      });
      setLoading(false);
    });
  }
  
  const infiniteRef = useInfiniteScroll({
    loading,
    // This value is set to "true" for this demo only. You will need to
    // get this value from the API when you request your items.
    hasNextPage: true,
    threshold: 500,
    onLoadMore: handleLoadMore,
    scrollContainer
  });

    return (
      
      <div ref={infiniteRef}>  
      <Carosel/>

      <Card title="Shop Best Sellers" style={{textAlign:'center' }}>

      {items.map(item =>        
      (
        <Card.Grid key={item.Handle} style={gridStyle} ><Cards item={item} key={item.Handle}/></Card.Grid>
        ))}
        {loading && <Skeleton loading="true" active></Skeleton>}        
        </Card>        
      </div>
      
     );
}   
CardItem.propTypes = {
  scrollContainer: PropTypes.oneOf(["window", "parent"])
};


export default CardItem;