import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import LoadingSpinner from "../LoadingSpinner";

const DropArea = styled.div`
  box-sizing: border-box;
  margin: 20px 0;
  background: #fff;
  border: 1px solid #eaeaea;
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

const UploadedImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ uploadedImage }) => `url("${uploadedImage}")`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const DragContent = ({ loading, uploadedImage, isDragActive }) => {
  if (loading) {
    return <LoadingSpinner />;
  } else if (uploadedImage) {
    return <UploadedImage uploadedImage={uploadedImage} />;
  } else {
    if (isDragActive) {
      return <p>Drop files here</p>;
    } else {
      return <p>Drag 'n' drop some files here, or click to select files</p>;
    }
  }
};

function MyDropzone({ storage }) {
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const storageRef = storage.ref();

  const onDrop = useCallback(acceptedFiles => {
    const task = storageRef.child(acceptedFiles[0].name).put(acceptedFiles[0]);

    setLoading(true);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        setLoading(false);
        setUploadedImage(url);
      });
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropArea {...getRootProps()}>
      <input {...getInputProps()} />
      <DragContent
        loading={loading}
        uploadedImage={uploadedImage}
        isDragActive={isDragActive}
      />
    </DropArea>
  );
}

export default MyDropzone;