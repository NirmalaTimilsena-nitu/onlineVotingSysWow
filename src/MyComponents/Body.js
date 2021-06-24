import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export const Body = () => {
  return (
    <div className="container">
      <Card style={{ width: "30rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>Question</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet consectetur!.</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="btn btn-success">Option 1</ListGroupItem>
          <ListGroupItem className="btn btn-success">Option 2</ListGroupItem>
          <ListGroupItem className="btn btn-success">Option 3</ListGroupItem>
        </ListGroup>
        <button className="btn btn-primary"> Submit </button>
      </Card>
    </div>
  );
};
