import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
// import Main from './APP/Main';
import Task from './Task7/Task'
// import State from './UseArray/State';
// import Task from './Task6/Task';
// import State from './UseArray/State';
// import Event from './Events/Event';
// import Task from './Task5/Task';
// import Task1 from './Tasks/Task1';
// import Task from './Task4/Task';
// import Propes from './propes'
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main/> */}
    <Task/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

