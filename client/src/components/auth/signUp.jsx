import React, { Component, Fragment } from 'react';
import * as authorService from '../../services/newAuthor';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    signUp(event) {
        event.preventDefault();
        authorService.insert(this.state)
        .then(() => {
            alert('Sign up successful! You will now be directed to the login screen.');
        }).catch((err) => {
            console.log(err); 
        });
        this.props.history.push('/login');
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        
        return (
            <div className="container card mt-2 mb-2">
                 <p>Sign up using the form below!</p>
                 <form onSubmit={(event) => this.signUp(event)}>
                     <div className="form-group">
                         <label htmlFor="email">Email:</label>
                         <input 
                             className="form-control" 
                             type="email" 
                             placeholder="Email"
                             onChange={(e) => this.handleEmailChange(e.target.value)} required 
                         /> 
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">Password:</label>
                         <input 
                             className="form-control" 
                             type="password" 
                             placeholder="password"
                             onChange={(e) => this.handlePasswordChange(e.target.value)} required 
                         /> 
                     </div>
                     
                     <input type="submit" value="Login" className="btn btn-outline-info mb-2" />
                 </form>
             </div>
        );
        
    }
}



export default SignUp;