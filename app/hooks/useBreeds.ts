import { useEffect, useState } from "react";
import { fetchBreeds } from "../actions";

const useBreeds = () => {
  const [breedList, setBreedList] = useState([]);
  useEffect(() => {
    Promise.all([fetchBreeds()]).then((res) => {
      setBreedList(res[0]);
    });
  }, []);

  return { breedList };
};

export default useBreeds;
