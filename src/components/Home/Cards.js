import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  padding-top: 120px;
  background: #fcfdff;
  min-height: 100vh;
`;

function Cards({ photos }) {
  return (
    <CardsContainer>
      {photos.map(photo => (
        <Card {...photo} />
      ))}
    </CardsContainer>
  );
}

export default Cards;
