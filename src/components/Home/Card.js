import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

const CardContainer = styled.div`
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
`;

function Card({ user, name, photo, db, canDelete }) {
  const deleteItem = () => {
    db.collection("photos")
      .doc(name)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <CardContainer>
      <MainCard>
        <CardImg backgroundImg={photo} />
      </MainCard>
      <UserInfo>
        <div>
          {name[0].toUpperCase()}
          {name.slice(1)} by&nbsp;
          <Link
            to={`/user/${user}`}
            style={{ textDecoration: "none", color: "#ff0080" }}
          >
            {user}
          </Link>
        </div>
        {canDelete && (
          <DeleteButton>
            <i
              onClick={deleteItem}
              style={{ fontSize: 18 }}
              className="material-icons"
            >
              delete
            </i>
          </DeleteButton>
        )}
      </UserInfo>
    </CardContainer>
  );
}

export default Card;
