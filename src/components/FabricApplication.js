import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const FabricApplication = ({ dressImage, fabricImage }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasInstance = new fabric.Canvas(canvasRef.current);
    setCanvas(canvasInstance);

    return () => {
      canvasInstance.dispose();
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;

    canvas.clear();

    fabric.Image.fromURL(dressImage, (dressImg) => {
      if (!dressImg) return;

      dressImg.set({
        left: 0,
        top: 0,
        selectable: true, 
      });
      canvas.add(dressImg);
      canvas.renderAll();

      fabric.Image.fromURL(fabricImage, (fabricImg) => {
        if (!fabricImg) return;

        fabricImg.set({
          left: dressImg.left,
          top: dressImg.top,
          scaleX: dressImg.width / fabricImg.width,
          scaleY: dressImg.height / fabricImg.height,
          clipPath: new fabric.Rect({
            left: dressImg.left,
            top: dressImg.top,
            width: dressImg.width,
            height: dressImg.height,
          }),
          selectable: true,
        });

        canvas.add(fabricImg);
        canvas.renderAll();
      });
    });
  }, [canvas, dressImage, fabricImage]);

  const applyFilter = (filter) => {
    if (!canvas) return;

    canvas.getObjects().forEach((obj) => {
      if (obj.type === 'image') {
        obj.filters.push(filter);
        obj.applyFilters();
      }
    });

    canvas.renderAll();
  };

  return (
    <div>
      <div>
        <button onClick={() => applyFilter(new fabric.Image.filters.Grayscale())}>
          Apply Grayscale
        </button>
        <button onClick={() => applyFilter(new fabric.Image.filters.Sepia())}>
          Apply Sepia
        </button>
      </div>
      <canvas ref={canvasRef} width="800" height="600"></canvas>
    </div>
  );
};

export default FabricApplication;
