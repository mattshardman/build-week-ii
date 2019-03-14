import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setModal, addComment } from "../../actions";

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
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CommentForm = styled.form`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const CommentsSection = styled.div`
  margin: 0 20px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;
  height: 40%;
  overflow: scroll;
`;

const Input = styled.input`
  height: 30px;
  width: 50%;
  outline: none;
  padding: 0 15px;
`;

const CommentButton = styled.button`
  background: none;
  border: none;
  width: 100px;
  height: 25px;
  outline: none;
`;

function Modal({ user, addComment, modalPhoto, setModal, displayPhotos }) {
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
        <CommentsSection>
          <h3 style={{ margin: "5px 0px" }}>Comments</h3>
          <CommentForm
            onSubmit={e => {
              e.preventDefault();
              addComment({
                id: modalPhoto.id,
                imageId: modalPhoto.imageId,
                comment: { user: user.displayName, text: field },
                comments: modalPhoto.comments
              });
              setField("");
            }}
          >
            <Input
              type="text"
              value={field}
              onChange={e => setField(e.target.value)}
            />
            <CommentButton type="submit">ADD COMMENT</CommentButton>
          </CommentForm>
          <Comments>
            {modalPhoto.comments.map(comment => (
              <p style={{ margin: "5px 0px" }}>
                <strong>{comment.user}</strong>&nbsp;{comment.text}
              </p>
            ))}
          </Comments>
        </CommentsSection>
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
