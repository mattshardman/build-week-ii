import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { logIn } from '../../actions';

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

function LoginBox(props) {
  console.log(props)
  return (
    <LoginBoxContainer>
      <GoogleButton onClick={props.logIn}>Login With Google</GoogleButton>
    </LoginBoxContainer>
  );
}

export default connect(st => st,{ logIn })(LoginBox);
