import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 300px;
  width: 380px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19);
  padding: 15px;
  background: #fff;
  margin: 10px;
`;

const CardImg = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  background-image: ${({backgroundImg}) => `url(${backgroundImg})`};
  background-size: cover;
  background-position: center;
`;

function Card({photo}) {
  return (
    <CardContainer>
      <CardImg backgroundImg={photo}>
          </CardImg>
    </CardContainer>
  );
}

export default Card;
