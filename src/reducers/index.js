import { combineReducers } from 'redux';
import photos from './photos';
import specificPhotos from './specificPhotos';
import displayPhotos from './displayPhotos';

export default combineReducers({
    displayPhotos,
    photos,
    specificPhotos,
});