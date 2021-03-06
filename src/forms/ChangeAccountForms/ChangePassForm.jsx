import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { Button } from '../../components/Button';
import { closeModal } from '../../store/modal/actions';
import { changePass } from '../../store/customer/operations';

export const ChangePassForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(changePass(values));
    dispatch(closeModal());
  };

  const initialValues = {
    password: '',
    newPassword: ''
  };

  return (
    <Form
      name='change_password'
      className='login-form'
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Введите старый пароль'
        />
      </Form.Item>
      <Form.Item
        name='newPassword'
        rules={[
          {
            required: true,
            message: 'Please input your NEW Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Введите новый пароль'
        />
      </Form.Item>
      <Form.Item>
        <Button text='Отмена' onClick={() => dispatch(closeModal())}/>
        <Button text='Изменить' type='submit'/>
      </Form.Item>
    </Form>
  );
};
