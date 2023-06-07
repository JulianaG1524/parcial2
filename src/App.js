import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import React from 'react';
import {IntlProvider} from 'react-intl';
import { useState } from "react";
import en from './locales/en.json'
import es from './locales/es.json'

function App() {
  const [messages, setMessages] = useState(navigator.language === 'en'? en : es)
  return (
    <IntlProvider locale={navigator.language} messages={messages}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/bookDetail" element={<BookDetail/>} />
      </Routes>
    </BrowserRouter>
    </IntlProvider>
  );
}

export default App;