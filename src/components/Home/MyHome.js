import React, { useState, useEffect } from "react";
import Cards from "./Cards";

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
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  if (!photos) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Cards photos={photos} />
    </>
  );
}

export default MyHome;
