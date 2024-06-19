import React from 'react';
import FabricApplication from './FabricApplication';

const Preview = ({ dressImage, fabricImage }) => {
  return (
    <div className="preview-container">
      <div className="image-container">
        <h2>Original Dress Image</h2>
        <img src={dressImage} alt="Original Dress" />
      </div>
      <div className="image-container">
        <h2>Fabric Applied Dress Image</h2>
        <FabricApplication dressImage={dressImage} fabricImage={fabricImage} />
      </div>
    </div>
  );
};

export default Preview;
