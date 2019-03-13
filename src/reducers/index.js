import { combineReducers } from 'redux';
import photos from './photos';
import specificPhotos from './specificPhotos';
import displayPhotos from './displayPhotos';
import modalPhoto from './modalPhoto';
import imageUploaded from './imageUploaded';
import loading from './loading';

export default combineReducers({
    loading,
    displayPhotos,
    photos,
    specificPhotos,
    modalPhoto,
    imageUploaded,
});