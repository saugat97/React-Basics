import React, {Component} from 'react';

import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Component3 from './functional/component3';

import Container1 from './containers/container1';
import Header from './containers/header';

import {
    BrowserRouter,
    Route
  } from "react-router-dom";

class Routes extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path= '/' component={Container1}></Route>
                    <Route path= '/component1' component={Component1}></Route>
                    <Route path= '/component2' component={Component2}></Route>
                    <Route path= '/component3' component={Component3}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;