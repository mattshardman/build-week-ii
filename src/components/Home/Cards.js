import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

const CardsContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
  margin: 0 15px;

  @media(max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;

function Cards({
  photos,
  db,
  user,
  canDelete,
  likeImage,
  updateImage,
  deleteImage,
  setModal,
}) {
  return (
    <CardsContainer>
      {photos.map(photo => {
        if (photo.display) {
          return (
            <Card
              {...photo}
              db={db}
              loggedInUserId={user.uid}
              likeImage={likeImage}
              updateImage={updateImage}
              deleteImage={deleteImage}
              canDelete={canDelete}
              setModal={setModal}
            />
          );
        }
        return null;
      })}
    </CardsContainer>
  );
}

export default Cards;
