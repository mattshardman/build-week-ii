import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: #fff;
  box-shadow: 0 3px 35px rgba(0, 0, 0, 0.19);
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 20px;
`;

function Header({ logOut, user }) {
  console.log(user.photoURL)
  return (
    <HeaderContainer>
      <h2>Hi</h2>
      <Icons>
      <Avatar>
        <img src={user.photoURL} alt="" height="100%" />
      </Avatar>
      <button onClick={logOut}>LOG OUT</button>
      </Icons>
    </HeaderContainer>
  );
}

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
}

export default Header;
