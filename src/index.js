import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import ErroStripe from './components/ErroStripe';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/redirect" render={(props) => <ErroStripe {...props} />} />
            <Redirect from="/" to="/redirect" />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);

