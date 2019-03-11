import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;
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
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Cards photos={photos} />
    </Container>
  );
}

export default Home;
