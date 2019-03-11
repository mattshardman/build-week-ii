import React from "react";
import PropTypes from 'prop-types';
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

function LoginBox({logIn, loading}) {
  return (
    <LoginBoxContainer>
      {loading && <div style={{ width: '100%', height: 70, background: 'red'}}>hi</div>}
      <GoogleButton onClick={logIn}>Login With Google</GoogleButton>
    </LoginBoxContainer>
  );
}

LoginBox.propTypes = {
  logIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default LoginBox;
