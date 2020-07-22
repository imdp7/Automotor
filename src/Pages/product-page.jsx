import React from 'react';
import { Card, Col, Row } from 'antd';

const style = {
    float:'center',
};
const Product = (props) => {
    const {title} = props;
    return(
        <div className="site-card-wrapper" style={style}>
    <Row gutter={12}>
      <Col span={6}>
        <Card title="Card title" bordered={false} >
          {title}
        
        </Card>
      </Col>
      
    </Row>
  </div>
    );
}
export default Product;