import { message } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const ProductCounter = ({ quantity, value, setValue, name }) => {
  const increaseQty = () => {
    if (value < quantity) {
      setValue(value + 1)
    } else {
      message.warn(`На складе есть только ${quantity}шт ${name}`)
    }
  }
  const decreaseQty = () => {
    if (value > 1) {
      setValue(value - 1)
    }
  }
  return (
    <CouterContainer>
      <BtnDecr onClick={() => decreaseQty()}>-</BtnDecr>
      <CountInput readOnly value={value + ' шт'} />
      <BtnIncr onClick={() => increaseQty()}>+</BtnIncr>
    </CouterContainer>
  )
}

const CouterContainer = styled.div`
  margin: 0 auto;
  border: 1px solid #e2e6ea;
  border-radius: 0.5rem;
  width: 90px;
  display: flex;
`
const BtnDecr = styled.button`
  font-size: 1.5rem;
  border: 1px solid transparent; 
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  flex-grow: 1;
  background-color: #f8f9fa;
    &:focus{
      outline: none;
    }
    &:hover{
      background-color: #e2e6ea;
      cursor: pointer;
    } 
    &:active{
      font-weight: bold;
    }
`
const BtnIncr = styled.button`
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  flex-grow: 1;
  background-color: #f8f9fa;
    &:focus{
      outline: none;
    }  
    &:hover{
      background-color: #e2e6ea;
      cursor: pointer;
    }
    &:active{
      font-weight: bold;
    } 
`
const CountInput = styled.input`
  border: none;
  width:40px;
  text-align: center;
    &:focus{
      outline: none;
      font-weight: bold;
    } 
`
