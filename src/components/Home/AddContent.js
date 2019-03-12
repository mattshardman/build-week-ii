import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import MyDropzone from "./Drop";

const AddContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 0 15px;
  margin: 10px 0;
`;

function AddContent({ db, storage, user }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const send = () => {
    db.collection("photos")
      .doc(title)
      .set({
        user: user.displayName,
        email: user.email,
        name: title,
        photo: url
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <AddContainer>
      <Input
        type="text"
        placeholder="Photo Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Photo Url"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <form action="/file-upload" class="dropzone" id="my-awesome-dropzone" />
      <MyDropzone storage={storage} />
      <Button clickFunction={send} label="add" />
    </AddContainer>
  );
}

export default AddContent;
