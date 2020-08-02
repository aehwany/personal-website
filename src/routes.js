
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Egypt from "./Blog/Travel/Egypt";
import MiddleEast from "./Blog/Travel/MiddleEast";
import Europe from "./Blog/Travel/Europe";
import America from "./Blog/Travel/America";
import Falafel from "./Blog/Food/Falafel";
import Ripples from "./Blog/Food/Ripples";
import KebabExpress from "./Blog/Food/KebabExpress";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/interests/travel/egypt" exact component={Egypt} />
                    <Route path="/interests/travel/middleeast" exact component={MiddleEast} />
                    <Route path="/interests/travel/europe" exact component={Europe} />
                    <Route path="/interests/travel/america" exact component={America} />
                    <Route path="/interests/food/falafel" exact component={Falafel} />
                    <Route path="/interests/food/ripples" exact component={Ripples} />
                    <Route path="/interests/food/kebabexpress" exact component={KebabExpress} />
                </Switch>
            </Router>
        )
    }
}