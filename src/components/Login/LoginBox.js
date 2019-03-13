import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoginBoxContainer = styled.section`
position: relative;
  height: 400px;
  width: 400px;
  border-radius: 5px;
  max-width: 100%;
  box-shadow: 0 3px 35px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`

  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: ${({ background }) => background};
  margin: 10px 0;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function LoginBox({ logIn, loading }) {
  return (
    <LoginBoxContainer>
      {loading && (
        <div style={{ width: "100%", height: 70, position: 'absolute', top: 0, left: 0 }}>hi</div>
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
