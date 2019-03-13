import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    height: 90%;
    width: 60%;
    background: #fff;
    padding: 20px;
`;

function Modal() {
    return(
        <ModalContainer>
            <ModalBox>
            </ModalBox>
        </ModalContainer>
    )
}

export default Modal;