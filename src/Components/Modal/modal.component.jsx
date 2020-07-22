import React, {useState} from 'react'
import { Modal } from 'antd';
import CardDetails from '../Cards/Card-details/card-details.component';
//import CardDetails from '../Cards/Card-details/card-details.component';

const gridStyle = {
  overflowX:"hidden"
  };

 
  const CardModal = () => {


    const [modal, setModal] = useState(false)

 
  
    const handleCancel = () => {

      setModal(modal);

    };

      return (
        <div>
          
          <Modal
          
            visible={modal}
            onCancel={handleCancel}
            className="ant-modal"

            footer={null}
            width="1280px"
            style={gridStyle}
          >
          
          </Modal>
          
        </div>
      );
    }

   export default CardModal;