import React from 'react';
import styled from 'styled-components';
import LoginBox from './LoginBox';

const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

function Login() {
    return (
        <LoginContainer>
            <LoginBox />
        </LoginContainer>
    )
}

export default Login;
