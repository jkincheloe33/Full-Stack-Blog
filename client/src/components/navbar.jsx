import React, { Component, Fragment } from 'react';
import AuthButton from './auth/authButton';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let scroll = 0;
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            if (scroll > 100 && scrollY > 100) {
                return;
            } else if (scroll <= 100 && scrollY <= 100) {
                return;
            }

            scroll = scrollY;
            if (scroll > 100) {
                this.nav.classList.add("show");
            } else {
                this.nav.classList.remove("show");
            }
        });
    }
    
    render() {
        return (
            <nav ref={(nav) => { this.nav = nav; }} className="animated slideInDown nav-container transition navbar navbar-expand-md navbar-light fixed-top">
                <a className="navbar-brand" href="/">
                    <img src="https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Edit_Document-512.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    Blog Sense
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <AuthButton />
                        
                    </div>
            </nav>

        );
    }      
}
        
        export default Navbar;
        
        
        
        
        
        
