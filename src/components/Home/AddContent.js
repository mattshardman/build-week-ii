import React, { useState } from "react";
import styled from "styled-components";

const AddContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <AddContainer>
      <input
        type="text"
        placeholder="Photo Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo Url"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <button onClick={send}>add</button>
    </AddContainer>
  );
}

export default AddContent;
