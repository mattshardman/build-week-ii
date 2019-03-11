import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cards from "./Cards";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 120px;
`;

function OtherHome({ db, user, match }) {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    db.collection("photos")
      .where("user", "==", match.params.id)
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
      <Cards photos={photos} />
    </Container>
  );
}

export default OtherHome;