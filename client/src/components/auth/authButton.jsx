import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';
import BlogForm from '../blogForm';

const AuthButton = withRouter(
    ({ history }) => { 
        if (isLoggedIn()) {
            return (
                <React.Fragment>
                    <button className="nav-button ml-auto btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                        <img src="https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Edit_Document-512.png" width="25" height="25" className="d-inline-block align-top" alt="" />
                    </button>
                    <Link className="nav-button ml-1 btn btn-warning my-2 my-sm-0 w-10" to="/logout">Logout</Link>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Link className="nav-button ml-auto btn btn-warning my-2 my-sm-0 w-10" to="/login">Login</Link>
                    <Link className="nav-button ml-1 btn btn-warning my-2 my-sm-0 w-10" to="/signUp">Sign Up</Link>
                </React.Fragment>
            );
        }
    }
);

export default AuthButton;