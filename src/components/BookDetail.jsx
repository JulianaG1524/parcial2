import React from 'react';

const BookDetail = (props) => {
    return(
        <div>
            <h1>{props.Book.name}</h1>
        </div>
    );
};

export default BookDetail;