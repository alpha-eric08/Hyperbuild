import React from "react";
import Grid from "../Sections/Grid";
import Fencing from "../Sections/Fencing";
import Doors from "../Sections/Doors";
import First from "../Sections/First";

const Portfolio = () => {
  return (
    <div className="my-10">
      <First />
      <Grid />
      <Fencing />
      <Doors />
    </div>
  );
};

export default Portfolio;
