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
          <Selection
            label="Your selection(s)"
            values={[]}
            multiple={true}
            extraClasses="col-sm-12 col-md-6"
          />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <button className="btn btn-outline-danger me-3">
              Clear Selection
            </button>
            <button className="btn btn-outline-primary">Fetch Images</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Filters;
