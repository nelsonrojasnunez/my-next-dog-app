const ImageCard = () => {
  return (
    <div className="col-sm-12 col-md-3 col-lg-4">
      <div className="card mb-3 mt-2">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Image cap
          </text>
        </svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
