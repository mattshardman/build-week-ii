import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchImages, fetchSpecificImages } from "../actions";

function withData(Component) {
  const WithData = props => {
    useEffect(() => {
      if(props.match.params.id) {
        return props.fetchSpecificImages(props.match.params.id);
      }
      return props.fetchImages();
    }, []);

    const openModal = () => {
      console.log('click')
    }

    return <Component {...props} openModal={openModal} />;
  };
  
  return connect(
    st => st,
    { fetchImages, fetchSpecificImages }
  )(WithData);
}

export default withData;
