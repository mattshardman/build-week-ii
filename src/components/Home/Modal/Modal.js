import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setModal, addComment } from "../../../actions";
import CommentsSection from "./CommentsSection";

const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const ModalBox = styled.div`
  margin: 0 50px;
  height: 90%;
  width: 50%;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 35px rgba(0, 0, 0, 0.3);
`;

const TitleSection = styled.div`
  width: 100%;
  height: 60px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 450px;
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

function Modal(props) {
  const { user, addComment, modalPhoto, setModal, displayPhotos } = props;
  const [field, setField] = useState("");

  if (!modalPhoto) {
    return null;
  }

  const currentPhoto = displayPhotos.find(
    e => e.imageId === modalPhoto.imageId
  );
  const currentIndex = displayPhotos.indexOf(currentPhoto);
  const nextPhoto = displayPhotos[currentIndex + 1] || displayPhotos[0];
  const prevPhoto =
    displayPhotos[currentIndex + 1] || displayPhotos[displayPhotos.length - 1];

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
          <h2>
            {modalPhoto.name[0].toUpperCase()}
            {modalPhoto.name.slice(1)}
          </h2>
        </TitleSection>
        <ModalImage background={modalPhoto.photo} />
        <p style={{ marginLeft: 20 }}>
          A photo by{" "}
          <Link
            to={`/user/${modalPhoto.id}`}
            style={{ color: "#ff0080", textDecoration: "none" }}
            onClick={() => setModal(false)}
          >
            {modalPhoto.user}
          </Link>
        </p>
        <CommentsSection
          addComment={addComment}
          modalPhoto={modalPhoto}
          user={user}
          field={field}
          setField={setField}
        />
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
  { setModal, addComment }
)(Modal);
