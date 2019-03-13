import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

import { search } from "../../actions";

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
  background: rgba(255, 255, 255, 0.9);
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 3px 35px rgba(0, 0, 0, 0.19)" : "none"};
  transition: box-shadow 400ms;
`;

const Title = styled.h1`
  opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: opacity 400ms;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Avatar = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 20px;
  border: 1px solid transparent;
  transition: border 400ms;

  :hover {
    border: #ff0080 1px solid;
  }
`;

const Form = styled.form`
  width: ${({focused}) => focused ? '400px' : '200px'};
  height: 30px;
  border: 1px #eaeaea solid;
  transition: width 200ms;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Input = styled.input`
  height: 100%;
  width: 90%;
  border: none;
  background: transparent;
  outline: none;
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

  return (
    <HeaderContainer scrolled={scrolled}>
      <Link
        to="/"
        style={{
          fontFamily: "Sniglet, cursive",
          textDecoration: "none",
          color: "#000",
          display: "flex",
          alignItems: "center"
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
      <Form 
        onSubmit={e => {
          e.preventDefault();
          console.log(field)
          search(field);
        }}
        focused={focused}
      >
        <Input
          type="text"
          placeholder="Search here..."
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setField('');
          }}
          value={field}
          onChange={e => setField(e.target.value)}
        />
        <i className="material-icons" style={{ fontSize: 14 }}>search</i>
      </Form>
      <Icons>
        <Link
          to="/"
          style={{
            margin: "0 20px",
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center"
          }}
        >
          <i className="material-icons" style={{ margin: 0, fontSize: 20 }}>
            home
          </i>
        </Link>
        <Link
          to="/add"
          style={{
            margin: "0 20px",
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center"
          }}
        >
          <i className="material-icons" style={{ margin: 0, fontSize: 20 }}>
            cloud_upload
          </i>
        </Link>
        <Link to="/my-home">
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
  user: PropTypes.shape().isRequired
};

export default connect(
  st => st,
  { search }
)(Header);
