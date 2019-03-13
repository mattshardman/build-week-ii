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

export const fetchUserImages = id => dispatch => {
  firebase.database
    .collection("photos")
    .where("id", "==", id)
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

export const deleteImage = id => dispatch => {
  firebase.database.collection("photos")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: types.DELETE_IMAGE, payload: { id } });
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
};

export const setModal = image => dispatch => {
  dispatch({ type: types.SET_MODAL_IMAGE, payload: { image } });
};
