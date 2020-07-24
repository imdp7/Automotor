import React, { useContext} from 'react';
import { Table, Button } from 'antd';
import {CartContext} from '../../Context/context'


const Cart= () => {
  const ctx = useContext(CartContext);
  const data = ctx.items.map(item =>({
    name:item.title,
    url:item.image,
    price:item.price,
    qty:item.quantity,

    
  }))


  const columns = [
     {
        title: '',
        dataIndex: 'url',

        render:theImageURL => <img src={theImageURL} alt={theImageURL} height="70px" width="70px"/>
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

    <CartContext.Provider>
    <div>
        <div style={{padding:'2em', fontSize:'25px', display:'flex'}}>
      Items in your Cart !!
      </div>
      <Table rowKey="uid" columns={columns} dataSource={data} size="large"  loading="true"
        summary={pageData => {
        let totalval = 0;
        let totalqty = 0;
        let total=0;
        let totalvalue =0;
        pageData.forEach(({ price, qty }) => {
          
            totalqty += qty; 
            total = qty*price
            totalval += total
        });
            totalvalue = Math.round(totalval * 100) / 100
          console.log({totalvalue})
        return (
          <>
            
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
              <Table.Summary.Cell >
                {totalqty}
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                ${totalvalue}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
      />
    </div>
    <div style={{padding:'20px'}}>
    <Button size="large" style={{float:'right'}}>Continue to Checkout</Button>
    </div>
    </CartContext.Provider>
    );
}

export default Cart;