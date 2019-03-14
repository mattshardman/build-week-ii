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
  transition: border 400ms;
  overflow: hidden;

  :hover {
    outline: none;
    border: 1px #ff0080 solid;
  }
`;

const UploadedImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ uploadedImage }) => `url("${uploadedImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const DragContent = ({ loading, uploadedImage, isDragActive }) => {
  if (loading) {
    return <LoadingSpinner />;
  } else if (uploadedImage) {
    return <UploadedImage uploadedImage={uploadedImage} />;
  } else {
    if (isDragActive) {
      return <p style={{ margin: 0, padding: '0 50px' }}>Drop file here</p>;
    } else {
      return <p style={{ margin: 0, padding: '0 50px' }}>Drag image file here, or click to select files</p>;
    }
  }
};

function MyDropzone({ storage, url, setUrl }) {
  const [loading, setLoading] = useState(false);
  const storageRef = storage.ref();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0])
    }));
    setUrl(files.preview)
    const task = storageRef.child(acceptedFiles[0].name).put(acceptedFiles[0]);

    task
      .then(snapshot => {
        console.log(snapshot)
        return snapshot.ref.getDownloadURL()
      })
      .then(url => {
        setLoading(false);
      });
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log(files)

  return (
    <DropArea {...getRootProps()}>
      <input {...getInputProps()} />
      <DragContent
        loading={loading}
        uploadedImage={url}
        isDragActive={isDragActive}
      />
    </DropArea>
  );
}

export default MyDropzone;
