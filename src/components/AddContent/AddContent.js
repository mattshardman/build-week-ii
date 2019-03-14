import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { addImage } from "../../actions";

import Button from "../Button";
import Dropzone from "./Drop";
import { CircularProgress } from "@material-ui/core";

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
  max-width: 95%;
  width: 400px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 0 15px;
  margin: 10px 0;
  transition: border 400ms;

  :hover,
  :focus,
  :active {
    outline: none;
    border: 1px #ff0080 solid;
  }
`;

function AddContent({ imageUploaded, db, storage, user, addImage }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const send = () => {
    addImage({ user, title, url });
    setLoading(true);
  };

  if (imageUploaded) {
    return <Redirect to="/my-home" />;
  }

  return (
    <AddContainer>
      <img
        src="https://image.flaticon.com/icons/svg/138/138584.svg"
        alt=""
        width={60}
      />
      <h2>Upload a photo</h2>
      <Input
        type="text"
        placeholder="Photo Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <form action="/file-upload" class="dropzone" />
      <Dropzone
        storage={storage}
        url={url}
        setUrl={setUrl}
        loading={loading}
        setLoading={setLoading}
      />
      { loading ?  <CircularProgress /> :
      <Button clickFunction={send} label="add" />
      }
    </AddContainer>
  );
}

export default connect(
  st => st,
  { addImage }
)(AddContent);
