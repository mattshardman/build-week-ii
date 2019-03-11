import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 5%;
  padding-top: 100px;
`;

const LoadingImage = styled.img`
  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
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
        <LoadingImage
          src="https://image.flaticon.com/icons/svg/148/148813.svg"
          alt=""
          height={35}
        />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Cards photos={photos} />
    </Container>
  );
}

export default Home;
