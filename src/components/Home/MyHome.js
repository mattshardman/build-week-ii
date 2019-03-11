import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cards from "./Cards";
import Button from "../Button";
import UserInfo from "./UserInfo";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;
`;

const AddBar = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  margin: 0px 15px;
`;

function MyHome({ db, user }) {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    db.collection("photos")
      .where("email", "==", user.email)
      .get()
      .then(querySnapshot => {
        const pts = [];
        querySnapshot.forEach(doc => {
          pts.push(doc.data());
        });
        setPhotos(pts);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  if (!photos) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <AddBar>
        <Link to="/add">
          <Button label="Add photo" />
        </Link>
      </AddBar>
    <MainContent>
      <UserInfo />
      <Cards photos={photos} />
      </MainContent>
    </Container>
  );
}

export default MyHome;
