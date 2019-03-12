import { combineReducers } from 'redux';
import photos from './photos';
import specificPhotos from './specificPhotos';
import displayPhotos from './displayPhotos';
import userPhotos from './userPhotos';

export default combineReducers({
    displayPhotos,
    photos,
    specificPhotos,
    userPhotos,
});