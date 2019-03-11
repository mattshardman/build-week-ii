import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  box-shadow: 0 3px 35px rgba(0, 0, 0, 0.19);
`;

function Header({ logOut }) {
    console.log(logOut)
  return (
    <HeaderContainer>
      <h2>Hi</h2>
      <button onClick={logOut}>LOG OUT</button>
    </HeaderContainer>
  );
}

export default Header;
