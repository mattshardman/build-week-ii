import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchImages, fetchSpecificImages, setModal } from "../actions";

function withData(Component) {
  const WithData = props => {
    console.log(props)
    useEffect(() => {
      if(props.match.params.id) {
        return props.fetchSpecificImages(props.match.params.id);
      }
      return props.fetchImages();
    }, []);

    return <Component {...props} setModal={props.setModal} modalPhoto={props.modalPhoto} />;
  };
  
  return connect(
    st => st,
    { fetchImages, fetchSpecificImages, setModal }
  )(WithData);
}

export default withData;
