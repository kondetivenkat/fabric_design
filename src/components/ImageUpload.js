import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      onUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {image ? (
        <img src={image} alt="Uploaded" className="uploaded-image" />
      ) : (
        <p>Drag & drop an image here, or click to select one</p>
      )}
    </div>
  );
};

export default ImageUpload;
