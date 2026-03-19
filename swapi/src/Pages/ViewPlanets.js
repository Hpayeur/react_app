import React from "react";
import ViewPlanets from "../Components/PlanetViewer";
import { Container } from "react-bootstrap";

const ViewPlanetsPage = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Planet Details</h2>
      <ViewPlanets />
    </Container>
  );
};

export default ViewPlanetsPage;
