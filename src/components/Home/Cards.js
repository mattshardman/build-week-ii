import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
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
