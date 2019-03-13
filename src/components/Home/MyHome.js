import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";
import Cards from "./Cards";
import UserInfo from "./UserInfo";

import {
  fetchSpecificImages,
  deleteImage,
  updateImage,
  setModal,
  likeImage
} from "../../actions";
import DemoCard from "./DemoCard";

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
 box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
  margin: 0 15px;
`;


function MyHome({
  db,
  loading,
  user,
  setModal,
  modalPhoto,
  fetchSpecificImages,
  userPhotos,
  displayPhotos,
  likeImage,
  updateImage,
  deleteImage
}) {
  useEffect(() => {
    fetchSpecificImages(user.uid);
  }, []);

  console.log(displayPhotos)
  if (loading) {
    return (
      <Container>
        <UserInfo user={user} numberOfPhotos={0} />
        <MainContent>
        <LoadingContainer>
          {[...Array.from("1234")].map(each => (
            <DemoCard />
          ))}
        </LoadingContainer>
        </MainContent>
      </Container>
    );
  }

  return (
    <Container>
      <UserInfo user={user} numberOfPhotos={displayPhotos.length} />
      <MainContent>
        <Cards
          photos={displayPhotos}
          db={db}
          modalPhoto={modalPhoto}
          setModal={setModal}
          likeImage={likeImage}
          updateImage={updateImage}
          deleteImage={deleteImage}
          canDelete
        />
      </MainContent>
    </Container>
  );
}

export default connect(
  st => st,
  { fetchSpecificImages, deleteImage, updateImage, setModal, likeImage }
)(MyHome);
