interface Props {
  image: string;
}
const DogImage = ({ image }: Props) => {
  const getBreedInfo = (url: string) => {
    let breedInfo = url.replace("https://images.dog.ceo/breeds/", "");
    breedInfo = breedInfo.substring(0, breedInfo.lastIndexOf("/"));
    return breedInfo;
  };

  return (
    <div className="col-sm-12 col-md-3 col-lg-4">
      <div className="card mb-3 mt-2">
        <img src={image} className="card-img-top float-start" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{getBreedInfo(image)}</h5>
        </div>
      </div>
    </div>
  );
};

export default DogImage;
