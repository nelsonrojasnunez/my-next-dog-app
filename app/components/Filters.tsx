"use client";

import Selection from "./Selection";
import Card from "./Card";

const Filters = () => {
  return (
    <>
      <Card>
        <div className="row">
          <Selection
            label="Breed selector"
            values={[]}
            extraClasses="col-sm-12 col-md-6"
          />
          <Selection
            label="Sub Breed selector"
            values={[]}
            extraClasses="col-sm-12 col-md-6"
          />
          <div>
            <button className="btn btn-primary">Add selection</button>
          </div>

          <Selection
            label="Your selection(s)"
            values={[]}
            multiple={true}
            extraClasses="col-sm-12 col-md-6 mt-3"
          />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            <button className="btn btn-outline-danger me-3">
              Remove Selecteds
            </button>
            <button className="btn btn-outline-danger me-3">
              Clear Selection
            </button>
            <button className="btn btn-outline-success">Fetch Images</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Filters;
