import React, {Component} from 'react';
import Component1 from './functional/component1';
import Callback from './functional/callback';
import Container1 from './containers/container1';
import Header from './containers/header';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import history from './utils/history';

import Auth from './utils/auth';
import AuthCheck from './utils/authcheck';
import UnauthRedirect from './functional/unauthredirect';
import ProtectedRoute from './functional/protectedroute';

export const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

const PrivateRoute = ({component: Component, auth}) => (
    <Route render = {props => auth.isAuthenticated() === true
        ? <Component auth={auth} {...props} />
        : <Redirect to ={{pathname: '/redirect'}} />
    }
    />
)

class Routes extends Component {
    render() {
        return(
            <div>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route exact path= '/' render={() => <Container1 auth = {auth}/>} />
                        <Route path= '/component/:id' component={Component1} />

                        <Route path= '/redirect' component={UnauthRedirect} />                        
                        <Route path= '/authcheck' render={() => <AuthCheck auth = {auth} /> } />
                        <Router path= '/callback' render={(props) => {handleAuthentication(props); return <Callback />} } />

                        <PrivateRoute path= '/privateroute' auth={auth} component={ProtectedRoute} />
                       
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;