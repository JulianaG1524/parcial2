import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/bookDetail" element={<BookDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;