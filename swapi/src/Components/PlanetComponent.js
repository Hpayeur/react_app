import React, { useEffect, useState } from "react";
import { GetPlanets } from "../API/PlanetAPI";
import { Card, Stack, Container, Spinner } from "react-bootstrap";

const PlanetComponent = ({ searchQuery }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    GetPlanets().then((response) => {
      const results = response.data.results || [];
      setPlanets(results);
      setFilteredPlanets(results);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = planets.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(planets);
    }
  }, [searchQuery, planets]);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map((planet, index) => (
            <Card key={index} className="shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">{planet.name}</Card.Title>
                  <Card.Text className="text-muted">
                    Planet ID: {planet.uid}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <Spinner animation="grow" />
          </Container>
        )}
      </Stack>
    </Container>
  );
};

export default PlanetComponent;
