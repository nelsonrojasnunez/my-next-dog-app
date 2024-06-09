const DogImage = () => {
  return (
    <div className="col-sm-12 col-md-3 col-lg-4">
      <div className="card mb-3 mt-2">
        <img
          src="https://images.dog.ceo/breeds/bluetick/n02088632_916.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </div>
  );
};

export default DogImage;
