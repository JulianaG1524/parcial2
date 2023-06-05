import Card from "react-bootstrap/Card";
import React from 'react';

function Book(props) {
 return (
    <Card style={{ width: "18rem" }} onClick={props.onPress(props.book)}>
        <Card.Img variant="top" src={props.book.image} alt="book" />
        <Card.Body className="mb-3">
            <Card.Title>{props.book.name}</Card.Title>
            <Card.Text>
                <p onClick={props.onPress.bind(this, props.book)} style={{cursor: 'pointer', color:'#319CFF'}}>AA</p>
                ISBN: {props.book.isbn}
            </Card.Text>
        </Card.Body>
    </Card>
 );
}

export default Book;


