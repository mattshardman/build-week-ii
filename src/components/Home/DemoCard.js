import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  height: 350px;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const MainCard = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 300px;
  width: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19);
  padding: 10px;
  background: #fff;
  overflow: hidden;
`;

const CardImg = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  cursor: pointer;
`;

const UserInfo = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DemoText = styled.div`
    width: 120px;
    height: 12px;
    background: #eaeaea;
`;

function DemoCard() {
  return (
    <CardContainer>
      <MainCard
      >
        <CardImg/>
      </MainCard>
      <UserInfo>
          <DemoText />
      </UserInfo>
    </CardContainer>
  );
}

export default DemoCard;
