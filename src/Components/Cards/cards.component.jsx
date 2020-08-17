import React, {useState,useEffect} from 'react';
import Cards from './Card-items/Card-items.component'
import Carosel from '../Carousel/carousel.component'
import { Card,Skeleton } from 'antd';
import { useInfiniteScroll } from "react-infinite-scroll-hook";
import PropTypes from "prop-types";
import axios from 'axios'

const gridStyle = {
    // height:'auto',
    // width:'auto',
    display:'grid',
    gridAutoRows: 'auto',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, 1fr)',
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
  } ,[]);

  function handleLoadMore  ()  {
    setLoading(true);
    const apiRoot = 'http://localhost:4000/products?Type=Laundry Care'
    axios.get(apiRoot).then((res) => {
      const item = res.data
       loadItems(items, items.length).then(newArray => {
       setItems([...item, ...items]);
 
       setLoading(false);
      });
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

