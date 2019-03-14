import React from "react";
import styled from "styled-components";

const CommentsSectionContainer = styled.div`
  margin: 0 20px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;
  height: 40%;
  overflow: scroll;
`;

const CommentForm = styled.form`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 30px;
  width: 50%;
  outline: none;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px #eaeaea solid;

  :hover,
  :focus,
  :active {
    border: 1px #ff0080 solid;
  }
`;

const CommentButton = styled.button`
  background: none;
  border: none;
  width: 100px;
  height: 25px;
  outline: none;
`;

function CommentsSection({ addComment, modalPhoto, user, field, setField }) {
  return (
    <CommentsSectionContainer>
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
    </CommentsSectionContainer>
  );
}

export default CommentsSection;
