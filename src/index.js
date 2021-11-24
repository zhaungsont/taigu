import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
require('dotenv').config();

const google = window.google;

ReactDOM.render(
  <App />,
  document.getElementById("root")
);