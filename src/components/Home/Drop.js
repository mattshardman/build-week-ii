import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

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
  padding: 30px;
  text-align: center;
  cursor: pointer;
`;

function MyDropzone({ storage }) {
  const storageRef = storage.ref();

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0].name);
    const task = storageRef.child(acceptedFiles[0].name).put(acceptedFiles[0]);

    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => console.log(url));
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropArea
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </DropArea>
  );
}

export default MyDropzone;
