import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import LoadingSpinner from "../LoadingSpinner";
import withData from "../withData";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

function Home({ db, user, displayPhotos, setModal, modalPhoto, likeImage }) {
  if (!displayPhotos) {
    return (
      <LoadingContainer>
       <LoadingSpinner />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Cards photos={displayPhotos} db={db} setModal={setModal} likeImage={likeImage} />
    </Container>
  );
}

export default withData(Home);
