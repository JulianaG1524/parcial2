import Card from "react-bootstrap/Card";
import React from 'react';

function Book(props) {
 return (
    <Card style={{ width: '100%', margin: '20px 0px', border: 'none', cursor: 'pointer'}} onClick={props.onPress.bind(this, props.book)}>
        <div className="row no-gutters">
            <div className="col-md-2">
                <Card.Img src={props.book.image} alt={props.book.name} />
            </div>
            <div className="col-md-10">
            <Card.Body>
                <Card.Title style={{fontSize: '54px'}}>{props.book.name}</Card.Title>
                <Card.Text style={{fontSize: '22px'}}>
                    ISBN: {props.book.isbn}
                </Card.Text>
            </Card.Body>
            </div>
        </div>
    </Card>
 );
}

export default Book;

