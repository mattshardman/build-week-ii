import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    height: 40px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    :hover {
        color: #ff0080;
    }
`;

function Button({ clickFunction, label }) {
    return (
        <ButtonWrapper
            type="button"
            onClick={clickFunction}
        >
            {label.toUpperCase()}
        </ButtonWrapper>
    )
}

export default Button;