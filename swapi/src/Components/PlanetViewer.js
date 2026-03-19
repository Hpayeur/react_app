import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPlanetById } from "../API/PlanetAPI";
import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { sentenceCase } from "change-case";

const PlanetViewer = () => {
  const { id } = useParams(); // Get planet ID from URL params
  const [planet, setPlanet] = useState(null);

  // Fetch planet data by ID
  useEffect(() => {
    GetPlanetById(id).then((res) => {
      setPlanet(res.data.result);
    });
  }, [id]);

  return (
    <Container className="my-5">
      {planet ? (
        <Row>
          {/* Left Column - Planet Details */}
          <Col md={7} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="display-5 mb-3">
                  {planet.properties.name}
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {sentenceCase(planet.properties.diameter)}
                </Card.Subtitle>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Rotation Period:</strong>{" "}
                      {planet.properties.rotation_period}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Orbital_period:</strong>{" "}
                      {planet.properties.orbital_period}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Gravity:</strong> {planet.properties.gravity}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Population:</strong>{" "}
                      {planet.properties.population}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Footer className="bg-white">
                  <Card.Link>Add link to planet here</Card.Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Additional Details */}
          <Col md={7}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Climate:</strong> {planet.properties.climate}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Terrain:</strong> {planet.properties.terrain}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Surface Water:</strong>{" "}
                      {planet.properties.surface_water}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Residents:</strong>{" "}
                      {planet.properties.residents.length}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Films:</strong> {planet.properties.films.length}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Url:</strong> {planet.properties.url}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Created:</strong> {planet.properties.created}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Edited:</strong> {planet.properties.edited}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        // Loading Spinner
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" />
        </div>
      )}
    </Container>
  );
};

export default PlanetViewer;
