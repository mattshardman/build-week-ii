import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import UserInfo from "./UserInfo";

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
      <UserInfo user={user} />
      <MainContent>
        <Cards photos={photos} canDelete />
      </MainContent>
    </Container>
  );
}

export default MyHome;
