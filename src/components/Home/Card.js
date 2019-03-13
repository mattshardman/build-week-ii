import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  height: 350px;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const MainCard = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19);
  padding: 10px;
  background: #fff;
`;

const CardImg = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

function Card({ id, imageId, user, name, photo, db, deleteImage, canDelete, setModal }) {
  const [deleteItem, setDeleteItem] = useState(false);
  return (
    <CardContainer>
      <MainCard onClick={() => setModal({ id, name, photo })}>
        <CardImg backgroundImg={photo} />
      </MainCard>
      <UserInfo>
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
        {canDelete && (
          <div>
            <DeleteButton>
              <i
                style={{ fontSize: 18, color: "#000"}}
                className="material-icons"
              >
              edit
              </i>
            </DeleteButton>
            <DeleteButton>
              <i
                onClick={
                  deleteItem
                    ? () => deleteImage(imageId)
                    : () => setDeleteItem(true)
                }
                style={{ fontSize: 18, color: deleteItem ? "red" : "#000" }}
                className="material-icons"
              >
                delete
              </i>
            </DeleteButton>
          </div>
        )}
      </UserInfo>
    </CardContainer>
  );
}

export default Card;
