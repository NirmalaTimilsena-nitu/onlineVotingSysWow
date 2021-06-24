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
          <ListGroupItem>Option 1</ListGroupItem>
          <ListGroupItem>Option 2</ListGroupItem>
          <ListGroupItem>Option 3</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};
