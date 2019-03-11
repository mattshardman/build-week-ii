import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsContainer = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    padding-top: 120px;
    background: #fcfdff;
    min-height: 100vh;
`;

function Cards() {
    return (
        <CardsContainer>
            <Card />     
        </CardsContainer>
    )
}

export default Cards;