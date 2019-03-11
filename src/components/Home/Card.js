import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    height: 300px;
    width: 350px;
    box-shadow: 0 3px 25px rgba(0,0,0,0.19);
    padding: 15px;
    background: #fff;
`;

const CardImg = styled.div`
    height: 100%;
    width: 100%;
    background: #eaeaea;
`

function Card() {
    return(<CardContainer>
        <CardImg />
    </CardContainer>)
}

export default Card;