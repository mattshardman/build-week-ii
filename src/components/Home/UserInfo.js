import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const UserInfoContainer = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 320px;
  background: #fff;
  margin-top: 10px;
  /* box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19);
   */
  border-radius: 5px;
  border: 1px #eaeaea solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoSection = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.div`
  box-sizing: border-box;
  height: 75px;
  width: 75px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  background: #eaeaea;
  background-image: ${({ background }) => `url("${background}")`};
  background-size: cover;
  background-position: center;
`;

function UserInfo({ user, numberOfPhotos }) {
  console.log(numberOfPhotos);
  return (
    <UserInfoContainer>
      <PhotoSection>
        <Photo background={user.photoURL} />
      </PhotoSection>
      <h2 style={{ margin: 0 }}>{user.displayName}</h2>
      <p> Photos uploaded: {numberOfPhotos}</p>
      <Link to="/add">
        <Button label="add new photo" />
      </Link>
    </UserInfoContainer>
  );
}

export default UserInfo;
