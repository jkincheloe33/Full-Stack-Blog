import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Navbar from './navbar';
import Header from './header';
import Blogs from './blogs';
import BlogCard from './blogCard';
import Login from './auth/login';
import Logout from './auth/logout';
import SignUp from './auth/signUp';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Blogs} />
                        <Route exact path="/blogs/:id" component={BlogCard} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path='/gitHub' component={() => window.location = 'https://github.com/jkincheloe33'}/>
                    </Switch>
                </Fragment>
            </Router>
        ) 
    }
}

export default Navigation;