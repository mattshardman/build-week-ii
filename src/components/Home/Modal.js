import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  height: 90%;
  width: 60%;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 35px rgba(0,0,0,0.3);
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${({ background }) => `url("${background}")`};
  background-size: cover;
  background-position: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
`;

function Modal({ modalPhoto, setModal }) {
  console.log(modalPhoto);

  if (!modalPhoto) {
    return null;
  }

  return (
    <ModalContainer>
      <CloseButton onClick={() => setModal(false)}>
        <i className="material-icons" style={{ color: '#fff' }}>close</i>
      </CloseButton>
      <ModalBox>
        <h2 style={{ marginLeft: 20 }}>{modalPhoto.name}</h2>
        <ModalImage background={modalPhoto.photo} />
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
