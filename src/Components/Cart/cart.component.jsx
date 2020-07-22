import React, { useContext} from 'react';
import { Table, Button } from 'antd';
import {CartContext} from '../../Context/context'


const Cart= () => {
  const ctx = useContext(CartContext);
  const data = ctx.items.map(item =>({
    name:item.title,
    url:item.thumbnailUrl

  }))

  const columns = [
     {
        title: '',
        dataIndex: 'url',
        render:theImageURL => <img src={theImageURL} alt={theImageURL} height="40%" width="25%"/>
     },

    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
    },
    
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      // render: tags => (
      //   <>
      //     {tags.map(tag => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: '',
      key: 'remove',
  
      render: (text, record) => (
      //   <Space size="middle">
      //     <a href="/">Invite {record.name}</a>
           <a href="/">Delete</a>
      //   </Space>
       ),
    },
  ];


    return(
    
  
    // <pain className="cart">
      
    //     <pl>
    //       {ctx.items.map(item => (
    //         <pi key={item.id}>
    //         <piv>
    //         <img className="card-img-top" variant="top" src={item.thumbnailUrl}  alt="1"/>
    //           </piv>
    //           <div>
    //             <strong>{item.title}</strong> - ${item.price} (
    //             {item.quantity})
    //           </div>
    //           {/* <div>
    //             <button
    //               onClick={ctx.removeProductFromCart.bind(
    //                 this,
    //                 item.id
    //               )}
    //             >
    //               Remove from Cart
    //             </button>
    //           </div> */}
    //         </li>
    //       ))}
    //     </ul>
    //   </main>

    <CartContext.Provider>
    <div>
        <div style={{padding:'2em', fontSize:'25px', display:'flex'}}>
      Items in your Cart !!
      </div>
      <Table rowKey="uid" columns={columns} dataSource={data} showSorterTooltip="true" size="large" pagination="true" tableLayout="auto" />
    </div>
    <div style={{padding:'20px'}}>
    <Button size="large" style={{float:'right'}}>Continue to Checkout</Button>
    </div>
    </CartContext.Provider>
    );
}

export default Cart;