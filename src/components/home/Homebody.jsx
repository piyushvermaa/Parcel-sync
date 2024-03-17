import React from 'react';
import Homecard from './Homecard';

const Homebody = () => {
    const cardsCount = 60; 

  return (
    <div style={{ zIndex: 1 }}>
    <div className="wrapper flex flex-wrap justify-center mt-10 ">
    {Array.from({ length: cardsCount }, (_, index) => (
        <Homecard key={index} />
      ))}
    </div>
    </div>
  );
};

export default Homebody;
