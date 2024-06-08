"use client";

import Selection from "../components/Selection";

const Filters = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Selection label="Breed selector" values={[]} />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mb-3">
                <Selection label="Sub Breed selector" values={[]} />
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Add Selection</button>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="mb-3">
                <Selection
                  label="Your selection(s)"
                  values={[]}
                  multiple={true}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <button className="btn btn-outline-danger me-3">
                Clear Selection
              </button>
              <button className="btn btn-outline-primary">Fetch Images</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
