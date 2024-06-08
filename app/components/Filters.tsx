import React from "react";

const Filters = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">
                  Breed selector
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">
                  Sub Breed selector
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
                <label htmlFor="basic-url" className="form-label">
                  Your selection(s)
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  multiple
                ></select>
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
