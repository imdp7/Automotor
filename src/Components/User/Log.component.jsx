import React, {useState} from 'react'
import { Modal } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import SignIn from './SignIn/SignIn.component'

import './Log.styles.scss'


function LoginModal ({props}){
const [modal, setModal] = useState(false)
//const [user, setUser] = useState([])

// useEffect(() => {
//   fetchUser();
// }, []);

// const fetchUser = async () => {
//   const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const user = await data.json();
//     console.log(user); 
//     setUser(user);
// };
 
const showModal = () => {
    setModal(!modal)

  };
const handleCancel = e => {
    console.log(e);
    setModal(!modal)
}


    return (
      <div>
        <span onClick={showModal}><UserOutlined />
       Login
        </span>
        <Modal
          title="Login"
          destroyOnClose="true"
          centered
          visible={modal}
          onCancel={handleCancel}
          closable="true"
          className="ant-modal"
          footer={null}

        >
      <SignIn/>
        {/* {user.map(user =>(
        <SignIn key={user.id} name={user.name} email={user.email}/>
        ))} */}
        </Modal>
      </div>
    );
  }

 export default LoginModal;