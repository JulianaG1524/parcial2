import { Container, Row, Col, Card } from "react-bootstrap";
import React from 'react';
import Book from "./Book";
import BookDetail from "./BookDetail";

const { useEffect, useState } = require("react");

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);

    const clickDetail = (Book) => {
        setSelectedBook(Book);
    }

    useEffect(() => {
        const URL = "http://localhost:2000/books"
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data);
        })
    }, [selectedBook]);

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Books</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>  
                            <Card.Body>
                                <Row>
                                    {books.map((book) => (
                                        <Col key={book.id}>
                                            <Book book={book} onPress={clickDetail}/>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <BookDetail Book={selectedBook}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Books;