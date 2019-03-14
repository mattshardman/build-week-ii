import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';

const ItemBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
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

function DeleteSection({ deleteImage, setDeleteItem, imageId }) {
    return(
        <ItemBox justify="flex-end">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              label="delete?"
              clickFunction={() => {
                deleteImage(imageId);
                setDeleteItem(false);
              }}
            />
            <CloseButton>
              <i
                className="material-icons"
                onClick={() => setDeleteItem(false)}
                style={{ cursor: "pointer", fontSize: 18 }}
              >
                close
              </i>
            </CloseButton>
          </div>
        </ItemBox>
      )
}

export default DeleteSection;