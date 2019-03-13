import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { setModal } from "../../actions";

const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
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
  box-shadow: 0 3px 35px rgba(0, 0, 0, 0.3);
`;

const TitleSection = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Avatar = styled.div`
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  background: #eaeaea;
  background-image: ${({ background }) => `url("${background}")`};
  background-size: cover;
  background-position: center;
  margin: 0 15px;
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
  outline: none;
`;

const ArrowButtonLeft = styled.button`
  position: absolute;
  left: 5%;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const ArrowButtonRight = styled.button`
  position: absolute;
  right: 5%;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

function Modal({ user, modalPhoto, setModal, displayPhotos }) {
  if (!modalPhoto) {
    return null;
  }

  const currentPhoto = displayPhotos.find(e => e.imageId === modalPhoto.imageId);
  const currentIndex = displayPhotos.indexOf(currentPhoto);
  const nextPhoto = displayPhotos[currentIndex + 1] || displayPhotos[0];
  const prevPhoto = displayPhotos[currentIndex + 1] || displayPhotos[displayPhotos.length - 1];

  return (
    <ModalContainer>
      <CloseButton onClick={() => setModal(false)}>
        <i className="material-icons" style={{ color: "#fff" }}>
          close
        </i>
      </CloseButton>
      <ArrowButtonLeft onClick={() => setModal(prevPhoto)}>
        <i className="material-icons" style={{ color: "#fff" }}>
          arrow_back
        </i>
      </ArrowButtonLeft>
      <ModalBox>
        <TitleSection>
          <AvatarSection>
          <Avatar background={user.photoURL} />
          <h2>{modalPhoto.name[0].toUpperCase()}{modalPhoto.name.slice(1)}</h2>
          </AvatarSection>
          <div></div>
        </TitleSection>
        <ModalImage background={modalPhoto.photo} />
        <p style={{ marginLeft: 20 }}>A photo by <Link to={`/user/${modalPhoto.id}`} onClick={() => setModal(false)}>{modalPhoto.user}</Link></p>
      </ModalBox>
      <ArrowButtonRight onClick={() => setModal(nextPhoto)}>
        <i className="material-icons" style={{ color: "#fff" }}>
          arrow_forward
        </i>
      </ArrowButtonRight>
    </ModalContainer>
  );
}

export default connect(
  st => st,
  { setModal }
)(Modal);
