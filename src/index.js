import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataCards from './components/dataCards';
import Header from './components/header';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Stadistic from './components/stadistic';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="float-left">
      <Sidebar/>
    </div>
    <div className="float-none">
      <Navbar/>
      <Header/>
      <DataCards/>
      <Stadistic/>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
