import React from "react";
import DogImage from "./DogImage";
import { FaInfoCircle } from "react-icons/fa";

interface Props {
  images: string[];
}

const Gallery = ({ images }: Props) => {
  return (
    <>
      <div className="card mt-2 rounded-2">
        <div className="card-body">
          <div className="row align-items-start">
            {images.length === 0 && (
              <>
                <p className="text-info">
                  <FaInfoCircle spacing={2} size={24} /> Please select breed
                  and/or subbreed. Add them to the selected list. Finally, press
                  the "Fetch button" to see dog pictures.
                </p>
              </>
            )}
            {images.map((item) => (
              <DogImage key={item} image={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
