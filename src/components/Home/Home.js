import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import withData from "../withData";
import DemoCard from "./DemoCard";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;

  @media(max-width: 500px) {
    padding-top: 80px;
  }
`;

const LoadingContainer = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
`;

function Home({
  loading,
  db,
  user,
  displayPhotos,
  setModal,
  modalPhoto,
  likeImage,
}) {
  if (loading) {
    return (
      <LoadingContainer>
        {[...Array.from("123456")].map(each => (
          <DemoCard />
        ))}
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Cards
        photos={displayPhotos}
        db={db}
        setModal={setModal}
        likeImage={likeImage}
      />
    </Container>
  );
}

export default withData(Home);
