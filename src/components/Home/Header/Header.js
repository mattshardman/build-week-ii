import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { search } from "../../../actions";
import Button from "../../Button";
import Logo from "../../Logo";
import Search from "./Search";
import LinkIcon from "./LinkIcons";

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
  background: rgba(255, 255, 255, 0.95);
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 3px 35px rgba(0, 0, 0, 0.19)" : "none"};
  transition: box-shadow 400ms;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const LogoWrapper = styled.div`
  width: 25%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileIcons = styled.div`
  display: none;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Avatar = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 15px;
  border: 1px solid transparent;
  transition: border 400ms;

  :hover {
    border: #ff0080 1px solid;
  }
`;

function Header({ logOut, user, search }) {
  const [field, setField] = useState("");
  const [focused, setFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const searchProps = {
    search,
    field,
    setField,
    focused,
    setFocused
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <MobileIcons>
        <LinkIcon icon="person" to="/my-home" />
        <Link to="/">
          <img
            src="https://image.flaticon.com/icons/svg/590/590769.svg"
            alt=""
            height={35}
          />
        </Link>
        <LinkIcon icon="cloud_upload" to="/add" />
      </MobileIcons>
      <LogoWrapper>
        <Logo scrolled={scrolled} />
      </LogoWrapper>
      <Search {...searchProps} />
      <Icons>
        <LinkIcon icon="home" to="/" />
        <LinkIcon icon="cloud_upload" to="/add" />
        <Link to="/my-home" onClick={() => setField("")}>
          <Avatar>
            <img src={user.photoURL} alt="" height="100%" />
          </Avatar>
        </Link>
        <Button clickFunction={logOut} label="log out" />
      </Icons>
    </HeaderContainer>
  );
}

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
  search: PropTypes.func.isRequired
};

export default connect(
  st => st,
  { search }
)(Header);
