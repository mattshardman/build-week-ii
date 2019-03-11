import React from 'react';
import PropTypes from 'prop-types';
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

function Login({logIn, loading}) {
    return (
        <LoginContainer>
            <LoginBox logIn={logIn} loading={loading} />
        </LoginContainer>
    )
}

Login.propTypes = {
    logIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Login;
