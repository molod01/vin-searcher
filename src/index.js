import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Variables from './components/Variables/Variables';
import Variable from './components/Variable/Variable'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="variables" element={<Variables />}/>
        <Route path='variables/:id' element={<Variable />}/>
      </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
