import { useEffect, useState } from "react";
import { fetchBreeds } from "../actions";

const useBreeds = () => {
  const [breedList, setBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchBreeds()]).then((res) => {
      setBreedList(res[0]);
      setIsLoading(false);
    });
  }, []);

  return { breedList, isLoading, setIsLoading };
};

export default useBreeds;
