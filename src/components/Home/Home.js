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

  @media(max-width: 900px) {
    padding-top: 80px;
  }
`;

const LoadingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
  margin: 0 15px;

  @media(max-width: 900px) {
    width: 100%;
    margin: 0;
  }
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
      <Container>
        <LoadingContainer>
          {[...Array.from("123456")].map(each => (
            <DemoCard />
          ))}
        </LoadingContainer>
      </Container>
    );
  }
  return (
    <Container>
      <Cards
        user={user}
        photos={displayPhotos}
        db={db}
        setModal={setModal}
        likeImage={likeImage}
      />
    </Container>
  );
}

export default withData(Home);
