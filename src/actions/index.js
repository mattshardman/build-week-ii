import types from "../constants";
import firebase from "../config/initFirebase";

export const fetchImages = () => dispatch => {
  firebase.database
    .collection("photos")
    .get()
    .then(querySnapshot => {
      const photos = [];
      querySnapshot.forEach(doc => {
        photos.push(doc.data());
      });
      dispatch({ type: types.FETCH_IMAGES, payload: { photos } });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
};

export const fetchSpecificImages = user => dispatch => {
  console.log(user)
  firebase.database
    .collection("photos")
    .where("id", "==", user)
    .get()
    .then(querySnapshot => {
      const photos = [];
      querySnapshot.forEach(doc => {
        photos.push(doc.data());
      });
      dispatch({ type: types.FETCH_SPECIFIC_IMAGES, payload: { photos } });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
};

export const fetchUserImages = user => dispatch => {
  console.log(user)
  firebase.database
    .collection("photos")
    .where("id", "==", user)
    .get()
    .then(querySnapshot => {
      const photos = [];
      querySnapshot.forEach(doc => {
        photos.push(doc.data());
      });
      dispatch({ type: types.FETCH_USER_IMAGES, payload: { photos } });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
};
