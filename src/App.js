import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import Preview from './components/Preview';
import './index.css';

const App = () => {
  const [dressImage, setDressImage] = useState(null);
  const [fabricImage, setFabricImage] = useState(null);

  return (
    <div className="app-container">
      <h1>Fabric Dress Visualizer</h1>
      <div className="upload-container">
        <div className="upload-item">
          <h2>Upload Dress Image</h2>
          <ImageUpload onUpload={setDressImage} />
        </div>
        <div className="upload-item">
          <h2>Upload Fabric Image</h2>
          <ImageUpload onUpload={setFabricImage} />
        </div>
      </div>
      {dressImage && fabricImage && (
        <Preview dressImage={dressImage} fabricImage={fabricImage} />
      )}
    </div>
  );
};

export default App;
