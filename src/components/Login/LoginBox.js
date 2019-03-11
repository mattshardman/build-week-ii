import React from "react";
import styled from "styled-components";

const LoginBoxContainer = styled.section`
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

const GoogleButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: crimson;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function LoginBox() {
  return (
    <LoginBoxContainer>
      <GoogleButton>Login With Google</GoogleButton>
    </LoginBoxContainer>
  );
}

export default LoginBox;
