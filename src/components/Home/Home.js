import React, { useState, useEffect } from "react";
import withLogin from "../loginHOC";
import Cards from "./Cards";

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

  console.log(photos);

  if (!photos) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Cards photos={photos} />
    </>
  );
}

export default withLogin(Home);
