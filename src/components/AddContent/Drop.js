import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import LinearProgress from "@material-ui/core/LinearProgress";

const DropArea = styled.div`
  box-sizing: border-box;
  position: relative;
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

const LoadingSection = styled.div`
  z-index: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

const DragContent = ({ uploadedImage, isDragActive }) => {
  if (uploadedImage) {
    return <UploadedImage uploadedImage={uploadedImage} />;
  } else {
    if (isDragActive) {
      return <p style={{ margin: 0, padding: "0 50px" }}>Drop file here</p>;
    } else {
      return (
        <p style={{ margin: 0, padding: "0 50px" }}>
          Drag image file here, or click to select files
        </p>
      );
    }
  }
};

function MyDropzone({ storage, url, setUrl }) {
  const [loading, setLoading] = useState(false);
  const storageRef = storage.ref();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      })
    );

    setLoading(true);
    
    const task = storageRef.child(acceptedFiles[0].name).put(acceptedFiles[0]);
    task
      .then(snapshot => {
        console.log(snapshot);
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        setLoading(false);
      });
  });

  useEffect(() => {
    setUrl(files.preview);
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropArea {...getRootProps()}>
      {loading && (
        <LoadingSection>
          <LinearProgress />
        </LoadingSection>
      )}
      <input {...getInputProps()} />
      <DragContent
        uploadedImage={url}
        isDragActive={isDragActive}
      />
    </DropArea>
  );
}

export default MyDropzone;
