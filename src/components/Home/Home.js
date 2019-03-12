import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import LoadingSpinner from "../LoadingSpinner";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

function Home({ db, user }) {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    db.collection("photos")
      .get()
      .then(querySnapshot => {
        const pts = [];
        querySnapshot.forEach(doc => {
          pts.push(doc.data());
        });
        setPhotos(pts);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  if (!photos) {
    return (
      <LoadingContainer>
       <LoadingSpinner />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Cards photos={photos} db={db} />
    </Container>
  );
}

export default Home;
