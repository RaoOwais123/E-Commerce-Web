import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { auth } from './Utils/firebase';


const CheckOutModal = ({isModalOpen,handleOk,handleCancel,CheckOutOrder}) => {
    useEffect(()=>{
        return setContinueAsGuest(false);
      },[])
    const [continueAsGuest, setContinueAsGuest] = useState(false);
    const isLogin = auth.currentUser;
  
  return (
 
      
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false} >
        {
            !isLogin && !continueAsGuest &&(
                <div className='flex flex-col items-center'>
                    <h1 className='text-center my-5 capitalize'>Login to save your order's and see progress</h1>
                    <Button type='primary'>Continue With Google</Button>
                    <h1 className="text-center my-5">----- OR -----</h1>
                    <Button onClick={()=> setContinueAsGuest(true)}>Continue As Guest</Button>

                </div>
            ) }
            {isLogin || 
            (continueAsGuest && (
                <Form onFinish={CheckOutOrder} layout="vertical">
            <Form.Item name={"username"} label={"Username"}>
              <Input />
            </Form.Item>
            <Form.Item name={"email"} required label={"Email"}>
              <Input type="email" />
            </Form.Item>
            <Form.Item name={"number"} required label={"Phone Number"}>
              <Input type="number" />
            </Form.Item>
            <Form.Item required name={"address"} label={"Address"}>
              <Input.TextArea placeholder="Address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
            )
            )}
      </Modal>
  
  );
};
export default CheckOutModal;