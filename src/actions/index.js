import types from "../constants";
import uuid from "uuid";
import { visionApi } from "./functions";
import firebase from "../config/initFirebase";

export const fetchImages = () => dispatch => {
  dispatch({ type: types.LOADING });
  firebase.database
    .collection("photos")
    .get()
    .then(querySnapshot => {
      const photos = [];
      querySnapshot.forEach(doc => {
        photos.push(doc.data());
      });
      dispatch({ type: types.FETCH_IMAGES, payload: { photos } });
      dispatch({ type: types.FINISHED_LOADING });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
};

export const fetchSpecificImages = user => dispatch => {
  dispatch({ type: types.LOADING });
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
      dispatch({ type: types.FINISHED_LOADING });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
};

export const addImage = data => dispatch => {
  const imageId = `${data.title}-${uuid()}`;
  visionApi(data.url).then(r => {
    firebase.database
      .collection("photos")
      .doc(imageId)
      .set({
        id: data.user.uid,
        imageId,
        user: data.user.displayName,
        avatar: data.user.photoURL,
        email: data.user.email,
        name: data.title,
        photo: data.url,
        likes: [],
        comments: [],
        tags: r.data.responses[0].labelAnnotations
      })
      .then(() => {
        dispatch({ type: types.UPLOADED_IMAGE });
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  });
};

export const deleteImage = id => dispatch => {
  firebase.database
    .collection("photos")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: types.DELETE_IMAGE, payload: { id } });
    })
    .catch(error => {
      console.error("Error removing document: ", error);
    });
};

export const likeImage = (id, imageId, likes) => dispatch => {
  if (!likes.includes(id)) {
    dispatch({ type: types.LIKE_IMAGE, payload: { id, imageId } });
    firebase.database
      .collection("photos")
      .doc(imageId)
      .update({ likes: [...likes, id] })
      .then(() => {
        console.log("image updated");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }
};

export const updateImage = (id, name) => dispatch => {
  firebase.database
    .collection("photos")
    .doc(id)
    .update({ name })
    .then(() => {
      dispatch({ type: types.UPDATE_IMAGE, payload: { id, name } });
    })
    .catch(error => {
      console.error("Error removing document: ", error);
    });
};

export const setModal = image => dispatch => {
  dispatch({ type: types.SET_MODAL_IMAGE, payload: { image } });
};

export const addComment = ({ id, imageId, comment, comments }) => dispatch => {
  dispatch({ type: types.ADD_COMMENT, payload: { id, imageId, comment } });
  firebase.database
    .collection("photos")
    .doc(imageId)
    .update({ comments: [...comments, comment] })
    .then(() => {
      console.log("updated");
    })
    .catch(error => {
      console.error("Error removing document: ", error);
    });
};

export const search = input => dispatch => {
  dispatch({ type: types.SEARCH, payload: { input } });
};
