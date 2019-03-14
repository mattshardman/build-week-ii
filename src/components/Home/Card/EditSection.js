import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Button";

const ItemBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;

const ItemField = styled.input`
  box-sizing: border-box;
  padding: 0 15px;
  width: 75%;
  height: 35px;
  background: white;
  border: 1px #eaeaea solid;
  border-radius: 5px;
  outline: none;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

function EditSection({ updateImage, setEditItem, imageId }) {
  const [field, setField] = useState("");

  return (
    <ItemBox justify="space-between">
      <ItemField
        value={field}
        placeholder="New name"
        onChange={e => setField(e.target.value)}
      />
      <Button
        label="update"
        clickFunction={() => {
          updateImage(imageId, field);
          setEditItem(false);
          setField("");
        }}
      />
      <CloseButton>
        <i
          className="material-icons"
          onClick={() => setEditItem(false)}
          style={{ cursor: "pointer", fontSize: 18 }}
        >
          close
        </i>
      </CloseButton>
    </ItemBox>
  );
}

export default EditSection;
