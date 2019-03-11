import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
  margin: 0 15px;
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
