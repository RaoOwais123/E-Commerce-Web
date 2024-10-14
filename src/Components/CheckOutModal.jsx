import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { auth } from './Utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';

const CheckOutModal = ({ isModalOpen, handleOk, handleCancel, CheckOutOrder }) => {
    const [continueAsGuest, setContinueAsGuest] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const isLogin = user.isLogin;
    const navigate = useNavigate();

    useEffect(() => {
        return () => setContinueAsGuest(false);
    }, []);

    const handleSignInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
  
          setUser({
              isLogin: true,
              userInfo: {
                  name: user.displayName || "",
                  photoUrl: user.photoURL || "",
                  email: user.email || "",
              },
          });
          setContinueAsGuest(true); // Show the form after login
          navigate("/");
      } catch (error) {
          console.error("Error signing in:", error.message);
      }
  };
  

    return (
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
            {
                !isLogin && !continueAsGuest && (
                    <div className='flex flex-col items-center'>
                        <h1 className='text-center my-5 capitalize'>Login to save your order's and see progress</h1>
                        <Button type='primary' onClick={handleSignInWithGoogle}>Continue With Google</Button>
                        <h1 className="text-center my-5">----- OR -----</h1>
                        <Button onClick={() => setContinueAsGuest(true)}>Continue As Guest</Button>
                    </div>
                )
            }
            {(isLogin || continueAsGuest) && (
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
            )}
        </Modal>
    );
};

export default CheckOutModal;
