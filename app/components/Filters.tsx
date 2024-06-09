"use client";

import Selection from "./Selection";
import Card from "./Card";
import useBreeds from "../hooks/useBreeds";
import { useState } from "react";
import { fetchDogs } from "../actions";
import Spinner from "./Spinner";

interface Props {
  handleSetDogsImages: (data: string[]) => void;
}

const Filters = ({ handleSetDogsImages }: Props) => {
  const { breedList, isLoading, setIsLoading } = useBreeds();
  const [subBreedList, setsubBreedList] = useState([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [currBreed, setCurrBreed] = useState("");
  const [currSubBreed, setCurrSubBreed] = useState("");

  const handleBreedChange = (selectedItem: string) => {
    setCurrBreed(selectedItem);
    let subBreedsList = [];
    subBreedsList = Object(breedList)[selectedItem];
    setsubBreedList(subBreedsList);
    setCurrSubBreed("");
  };

  const handleSubBreedChange = (selectedItem: string) => {
    setCurrSubBreed(selectedItem);
  };

  const handleAddSelection = () => {
    let currentSelection = `${currBreed}/${currSubBreed}`;
    if (!currentSelection.endsWith("/")) currentSelection += "/";
    if (currentSelection.length > 1)
      setSelected([...selected, currentSelection]);
  };

  const handleClearSelection = () => {
    setSelected([]);
    handleSetDogsImages([]);
  };

  const handleRequestDogsGallery = async () => {
    //const selection = selecteds[0] ?? "";
    setIsLoading(true);
    let calls: any[] = [];
    selected.map((selection) => {
      calls.push(fetchDogs(selection, 5));
    });
    let data: any[] = [];
    if (calls.length > 0) {
      Promise.all(calls).then((values) => {
        console.log("###");
        console.log(values);
        values.map((item) => {
          data = data.concat(item);
        });
        console.log("**", data, "***");
        handleSetDogsImages(data);
        setIsLoading(false);
      });
    } else {
      handleSetDogsImages(data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card>
        <div className="row">
          <Selection
            key="breed_selector"
            label="Breed selector"
            values={Object.keys(breedList)}
            extraClasses="col-sm-12 col-md-6"
            handleOnChange={handleBreedChange}
          />
          <Selection
            key="subbreed_selector"
            label="Sub Breed selector"
            values={subBreedList}
            extraClasses="col-sm-12 col-md-6"
            handleOnChange={handleSubBreedChange}
          />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => handleAddSelection()}
            >
              Add selection
            </button>
          </div>

          <Selection
            key="user_selection"
            label="Your selection(s)"
            values={selected}
            multiple={true}
            extraClasses="col-sm-12 col-md-6 mt-3"
          />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            <button
              className="btn btn-outline-danger me-3"
              onClick={() => handleClearSelection()}
            >
              Clear Selection
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleRequestDogsGallery()}
            >
              Fetch Images
            </button>
          </div>
        </div>
        {isLoading && <Spinner />}
      </Card>
    </>
  );
};

export default Filters;
