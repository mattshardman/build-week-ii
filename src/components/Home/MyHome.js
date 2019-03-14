import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Cards from "./Cards";
import UserInfo from "./UserInfo";
import * as actions from "../../actions";
import DemoCard from "./DemoCard";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  padding: 0 5%;
  padding-top: 100px;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  width: 900px;
  margin: 0px 15px;
`;

const LoadingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: #fcfdff;
  margin: 0 15px;
`;

function MyHome(props) {
  useEffect(() => {
    props.fetchSpecificImages(props.user.uid);
  }, []);

  if (props.loading) {
    return (
      <Container>
        <UserInfo user={props.user} numberOfPhotos={0} />
        <MainContent>
          <LoadingContainer>
            {[...Array.from("1234")].map(each => (
              <DemoCard />
            ))}
          </LoadingContainer>
        </MainContent>
      </Container>
    );
  }

  return (
    <Container>
      <UserInfo user={props.user} numberOfPhotos={props.displayPhotos.length} />
      <MainContent>
        <Cards {...props} photos={props.displayPhotos} canDelete />
      </MainContent>
    </Container>
  );
}

export default connect(
  st => st,
  actions
)(MyHome);
