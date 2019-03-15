import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoginBoxContainer = styled.section`
  position: relative;
  width: 440px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LoginButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: ${({ background }) => background};
  margin: 5px 0px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function LoginBox({ logIn, loading }) {
  return (
    <LoginBoxContainer>
      {loading && (
        <div
          style={{
            width: "100%",
            height: 70,
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      )}
      <LoginButton background="#3b5998" onClick={() => logIn("fb")}>
        Login With Facebook
      </LoginButton>
      <LoginButton background="crimson" onClick={logIn}>
        Login With Google
      </LoginButton>
    </LoginBoxContainer>
  );
}

LoginBox.propTypes = {
  logIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LoginBox;
