import React, { useState } from 'react';
import car from './car.jpg';

function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [bgColor, setBgColor] = useState('rgb(255, 255, 255)');
  const [rotation, setRotation] = useState(0); // rotation in degrees

  const increaseHeight = () => setHeight(prev => prev + 20);

  const decreaseHeight = () => setHeight(prev => (prev > 50 ? prev - 20 : prev));

  const changeBackground = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBgColor(`rgb(${r}, ${g}, ${b})`);
  };

  const rotateImage = () => {
    setRotation(prev => prev + 30);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Image Manipulation</h2>

      {/* Image Container */}
      <div
        style={{
          backgroundColor: bgColor,
          display: 'inline-block',
          padding: '10px',
          borderRadius: '10px',
          transition: 'background-color 0.4s ease',
        }}
      >
        <img
          src={car}
          alt="Car"
          height={height}
          width="auto"
          style={{
            borderRadius: '10px',
            transition: 'all 0.5s ease', 
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={increaseHeight} style={btnStyle}>Increase Height</button>
        <button onClick={decreaseHeight} style={btnStyle}>Decrease Height</button>
        <button onClick={changeBackground} style={btnStyle}>Change Background</button>
        <button onClick={rotateImage} style={btnStyle}>Rotate Image</button>
      </div>

      {/* Display info */}
      <p style={{ marginTop: '15px', fontSize: '18px' }}>
        Current Height: {height}px <br />
        Background Color: <span style={{ color: bgColor }}>{bgColor}</span> <br />
        Rotation: {rotation % 360}°
      </p>
    </div>
  );
}

const btnStyle = {
  margin: '5px',
  padding: '8px 16px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '6px',
  border: '1px solid gray',
};

export default ImageManipulation;
