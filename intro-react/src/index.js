// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import * as ReactDOMClient from 'react-dom/client'; 
import './index.css'; 
import App from './App';  

const container = document.getElementById('root');  
const root = ReactDOMClient.createRoot(container); 
root.render(<App />);