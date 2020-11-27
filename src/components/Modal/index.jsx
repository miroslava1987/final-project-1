import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import styled from 'styled-components';

import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { closeModal } from '../../store/modal/actions.jsx';
import { selectModalContent, selectModalTitle, selectModalActions } from '../../store/modal/selectors.jsx';

export const Modal = ({ closeButton = true }) => {
  useLockBodyScroll();
  const dispatch = useDispatch();
  const content = useSelector(selectModalContent);
  const title = useSelector(selectModalTitle);
  const actions = useSelector(selectModalActions)

  const closeModalHandler = () => {
    dispatch(closeModal())
  }
  return ReactDOM.createPortal(
    <ModalOwerlay onClick={(e) => e.currentTarget === e.target ? closeModalHandler() : null}>
      <ModalWindow>
        <ModalHeader>
          <ModalTittle>{title}</ModalTittle>
          {closeButton && <CloseBtn onClick={closeModalHandler}>{icon.close}</CloseBtn>}
        </ModalHeader>
        <ModalText>
          {content}
        </ModalText>
        {actions && <>{actions}</>}
      </ModalWindow>
    </ModalOwerlay>,
    document.getElementById('modal-root')
  )
}

const ModalOwerlay = styled.div`
  position: fixed;
  background-color: #312e2e83;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ModalWindow = styled.div` 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  max-height: 100vh;
  overflow: auto;
`

const ModalHeader = styled.div`
  margin: 1rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`

const ModalText = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 20px;
  font-size: 20px;  
`

export const CloseBtn = styled.div`
width: 1.5rem;
height: 1.5rem;
fill: #A0A9AF;
  &:hover{
    fill: #c91212;
    cursor: pointer;
  }
`;

const ModalTittle = styled.div`
font-size: 1.6rem;
font-weight: bold;
`