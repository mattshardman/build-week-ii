import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";
import Cards from "./Cards";
import UserInfo from "./UserInfo";

import { fetchUserImages, deleteImage } from "../../actions";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  padding: 0 5%;
  padding-top: 100px;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  width: 900px;
  margin: 0px 15px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

function MyHome({ db, user, fetchUserImages, userPhotos, deleteImage }) {
  useEffect(() => {
    fetchUserImages(user.uid);
  }, []);

  if (!userPhotos) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <UserInfo user={user} />
      <MainContent>
        <Cards
          photos={userPhotos}
          db={db}
          deleteImage={deleteImage}
          canDelete
        />
      </MainContent>
    </Container>
  );
}

export default connect(
  st => st,
  { fetchUserImages, deleteImage }
)(MyHome);
