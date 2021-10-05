import React, { Fragment } from "react";
import {images } from '../../image'

const Spinner : React.FC = () => (
  <Fragment>
    <img
      src={ images.spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner