import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';


const App = () => (
  <BrowserRouter>
    <Routes />
    <ToastContainer autoClose={5000} />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
