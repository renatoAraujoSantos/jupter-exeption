// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import ErroStripe from 'components/ErroStripe.js';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/redirect" render={(props) => <ErroStripe {...props} />} />
            <Redirect from="/" to="/redirect" />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);