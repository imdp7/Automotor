import React, {useState,useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import './SignIn.styles.scss'
import {Link} from 'react-router-dom'



function onSuccess(googleUser) {

  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error, 'Try Again');
}

const SignIn =() =>{
  
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return ( 
    <div className="container">
    <div style={{padding:20,alignItems:'center',justifyContent:'center',textAlign:'center'}}>
    <GoogleLogin
    clientId="342114596383-rvnb56psi9u9d9gqjkb74hhdhfpg4ij9.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    theme='dark'
    fetchBasicProfile='true'
  />
    </div>
    <Form form={form} name="normal_login" layout="horizontal" onFinish={onFinish} size="large">
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="/" className="login-form-forgot" >
          Forgot password
        </Link>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(false) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
    </div>
  );

}

export default SignIn;