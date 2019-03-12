import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from 'react-router-dom';

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
  const [sent, setSent] = useState(false);
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
        setSent(true);
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  if(sent) {
    return <Redirect to="/my-home" />
  }

  return (
    <AddContainer>
      <Input
        type="text"
        placeholder="Photo Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <form action="/file-upload" class="dropzone" id="my-awesome-dropzone" />
      <MyDropzone storage={storage} url={url} setUrl={setUrl} />
      <Button clickFunction={send} label="add" />
    </AddContainer>
  );
}

export default AddContent;
