import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Redirect } from 'react-router-dom';

import { addImage } from '../../actions';

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
  transition: border 400ms;

  :hover, :focus, :active {
    outline: none;
    border: 1px #ff0080 solid;
  }
`;

function AddContent({ imageUploaded, db, storage, user, addImage }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const send = () => {
    addImage({ user, title, url});
  };

  if(imageUploaded) {
    return <Redirect to="/my-home" />
  }

  return (
    <AddContainer>
      <img src="https://image.flaticon.com/icons/svg/138/138584.svg" alt="" width={60}/>
      <h2>Upload a photo</h2>
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

export default connect(st => st, {addImage})(AddContent);
