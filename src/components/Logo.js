import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: opacity 400ms;
`;

function Logo({ scrolled }) {
  return (
    <Link
      to="/"
      style={{
        fontFamily: "Sniglet, cursive",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        alignItems: "center",
        width: '25%'
      }}
    >
      <img
        src="https://image.flaticon.com/icons/svg/590/590769.svg"
        alt=""
        height={40}
        style={{ marginRight: 15 }}
      />
      <Title scrolled={scrolled}>Banana</Title>
    </Link>
  );
}

export default Logo;
