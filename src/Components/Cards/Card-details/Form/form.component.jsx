import React,{useState} from 'react';
import { Form, InputNumber} from 'antd';
import './form.styles.scss'

const gridstyles = {
  padding:'30px',
  
}
function FormItem(number) {
    if (number >= 1 && number<10) {
      return {
        validateStatus: 'success',

      };
    }
    if (number >= 10 ) {
      return {
        validateStatus:'warning',
        errorMsg: 'Cannot exceed items more than 10',

      };
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Item cannot be 0!',
    };
  }
  
  const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 10 },
  };
  
  const RawForm = () => {
    const [number, setNumber] = useState({
      value: 1,
    });
  
  
    const onNumberChange = value => {
      setNumber({
        ...FormItem(value),
        value,
      });
    };
    return (
        <Form>
          <Form.Item
            style={gridstyles}
            {...formItemLayout}
            label="Qty : "
            validateStatus={number.validateStatus}
            help={number.errorMsg}
          >
            <InputNumber min={0} max={10} value={number.value} onChange={onNumberChange} />
          </Form.Item>
        </Form>
      );
    };
export default RawForm;