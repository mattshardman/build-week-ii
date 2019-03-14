import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteSection from "./DeleteSection";
import EditSection from "./EditSection";
import MainCard from "./MainCard";

const CardContainer = styled.div`
  position: relative;
  height: 350px;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.i`
  font-size: 18px;
  color: #000;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

function Card(props) {
  const {
    id,
    imageId,
    user,
    name,
    updateImage,
    deleteImage,
    canDelete
  } = props;

  const [deleteItem, setDeleteItem] = useState(false);
  const [editItem, setEditItem] = useState(false);

  return (
    <CardContainer>
      <MainCard {...props} />
      <UserInfo>
        {!editItem && (
          <div>
            {name[0].toUpperCase()}
            {name.slice(1)} by&nbsp;
            <Link
              to={`/user/${id}`}
              style={{ textDecoration: "none", color: "#ff0080" }}
            >
              {user}
            </Link>
          </div>
        )}

        {canDelete && !editItem && !deleteItem && (
          <div>
            <IconButton>
              <Icon
                className="material-icons"
                onClick={() => setEditItem(!editItem)}
              >
                edit
              </Icon>
            </IconButton>
            <IconButton>
              <Icon
                className="material-icons"
                onClick={() => setDeleteItem(true)}
              >
                delete
              </Icon>
            </IconButton>
          </div>
        )}

        {editItem && (
          <EditSection
            updateImage={updateImage}
            setEditItem={setEditItem}
            imageId={imageId}
          />
        )}

        {deleteItem && (
          <DeleteSection
            imageId={imageId}
            deleteImage={deleteImage}
            setDeleteItem={setDeleteItem}
          />
        )}
      </UserInfo>
    </CardContainer>
  );
}

export default Card;
