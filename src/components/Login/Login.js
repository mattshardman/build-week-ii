import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LoginBox from "./LoginBox";
import Logo from "../Logo";

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1536228891610-d27ef66f7110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-position: center;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    /* background: linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0)); */
  }
`;

const LogoBox = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
`;

const Header = styled.h1`
  font-size: 70px;
  color: #fff;
  text-shadow: 0 3px 35px rgba(0,0,0,0.3);
`;

const Title = styled.h1`
  color: #fff;
`;

function Login({ logIn, loading }) {
  return (
    <LoginContainer>
      <LogoBox>
        <div
          to="/"
          style={{
            fontFamily: "Sniglet, cursive",
            textDecoration: "none",
            color: "#000",
            display: "flex",
            alignItems: "center",
            width: "25%"
          }}
        >
          <img
            src="https://image.flaticon.com/icons/svg/590/590769.svg"
            alt=""
            height={40}
            style={{ marginRight: 15 }}
          />
          <Title>Banana</Title>
        </div>
      </LogoBox>
          <Header>Photo Sharing</Header>
      <LoginBox logIn={logIn} loading={loading} />
      <Background />
    </LoginContainer>
  );
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Login;
