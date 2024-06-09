import React from "react";
import DogImage from "./DogImage";

interface Props {
  images: string[];
}

const Gallery = ({ images }: Props) => {
  return (
    <div className="card mt-2 rounded-2">
      <div className="card-body">
        <div className="row align-items-start">
          {images.map((item) => (
            <DogImage key={item} image={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
