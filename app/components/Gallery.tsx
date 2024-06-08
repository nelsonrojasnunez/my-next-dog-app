import React from "react";
import DogImage from "./DogImage";

const Gallery = () => {
  const test = [1, 2, 3, 4, 5, 6];
  return (
    <div className="card mt-2 rounded-2">
      <div className="card-body">
        <div className="row">
          {test.map((item) => (
            <DogImage key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
