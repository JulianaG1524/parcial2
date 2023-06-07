import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const { useEffect, useState } = require("react");

const BookDetail = (props) => {

    const rol = sessionStorage.getItem("rol");

    const titlesStyle={
        color: 'red', 
        fontSize: '24px',
        margin: '0px'
    }

    const dataStyle={
        color: 'black',
        fontSize: '20px',
        fontWeight: 'normal',
        margin: '0px'
    }

    console.log(rol)

    if (props.book.length === 0) {
        return null;
    }

    return(
        <Container style={{width: '100%'}}>
            <h1 style={{ borderBottom: '4px solid black', paddingBottom: '8px', marginBottom:'24px' }}>{props.book.name}</h1>
            <Row >
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="ISBN"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.isbn}/> : <p style={dataStyle}>{props.book.isbn}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Author"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.author}/> : <p style={dataStyle}>{props.book.author}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Publisher"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.publisher}/> : <p style={dataStyle}>{props.book.publisher}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Genre"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.gender}/> : <p style={dataStyle}>{props.book.gender}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Year"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.year}/> : <p style={dataStyle}>{props.book.year}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Available"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.available_online ? <FormattedMessage id="Yes"/>: <FormattedMessage id="No"/>}/> : <p style={dataStyle}>{props.book.available_online ? <FormattedMessage id="Yes"/>: <FormattedMessage id="No"/>}</p>}
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <p style={titlesStyle}><FormattedMessage id="Price"/></p>
                </Col>
                <Col className="col-6">
                    {rol === 'Administrador' ? <input type="text" placeholder={props.book.price}/> : <p style={dataStyle}>{props.book.price}</p>}
                </Col>
            </Row>
            <Row>
                <p style={titlesStyle}><FormattedMessage id="Summary"/></p>
                {rol === 'Administrador' ? <textarea type="text" rows={5} placeholder={props.book.summary} style={{padding: '10px', margin: '10px', width: '90%'}}/> : <p style={dataStyle}>{props.book.summary}</p>}
            </Row>
            
        </Container>
    );
};

export default BookDetail;
