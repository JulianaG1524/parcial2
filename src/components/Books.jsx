import { Container, Row, Col, Card } from "react-bootstrap";
import React from 'react';
import Book from "./Book";
import BookDetail from "./BookDetail";

const { useEffect, useState } = require("react");

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);

    const clickDetail = (book) => {
        const URL = `http://localhost:2000/books/${book.id}`
        fetch(URL).then(data => data.json()).then(data => {
            setSelectedBook(data);
        })
    }

    useEffect(() => {
        const URL = "http://localhost:2000/books"
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data);
        })
    }, [selectedBook]);

    return(
        <Container fluid >
            <Row style={{margin: '20px'}}>
                <Col className="col-8">
                    {books.map((book) => (
                        <Book book={book} onPress={clickDetail}/>
                    ))}
                </Col>
                <Col className="col-4" >
                    <BookDetail book={selectedBook}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Books;