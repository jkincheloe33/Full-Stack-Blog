import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogForm from './blogForm';
import BlogList from './blogList';
import EmployeeMain from './employees/employeeMain';
import * as blogService from '../services/blogs';
import * as userService from '../services/user';


class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [
                {
                    title: 'Test Title 1',
                    content: 'Test Post 1',
                    id: 0
                },
                {
                    title: 'Test Title 2',
                    content: 'Test Post 2',
                    id: 1
                },
                {
                    title: 'Test Title 3',
                    content: 'Test Post 3',
                    id: 2
                },
            ],
            loggedIn: false
        };
    }

    componentDidMount() {
        this.getBlogs();
        this.isLoggedIn();
    }

    isLoggedIn() {
        userService.checkLogin()
            .then((loggedIn) => {
                this.setState({
                    loggedIn
                });
            });
    }

    getBlogs() {
        blogService.all()
            .then((blogs) => {
                let blogsArray = [];
                for (let i = 0; i < blogs.length; i++) {
                    blogsArray.push({
                        title: blogs[i].title,
                        content: blogs[i].content,
                        id: blogs[i].id
                    });
                }

                this.setState({
                    blogs: blogsArray
                });

            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(blog) {
        blogService.insert(blog)
            .then(() => {
                this.getBlogs();
            }).catch((err) => {
                console.log(err);
            });
    }

    returnHome(event) {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        if (this.state.loggedIn === true) {
            return (
                <React.Fragment>
                    <div className="content-container">
                        <div className="blogs-container">
                            <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit Blog</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <BlogForm postBlog={(blog) => { this.addBlog(blog); }} />
                                        </div>
                                        <button
                                            onClick={(event) => { this.returnHome(event) }}
                                            type="button"
                                            className="SubmitBtn d-inline mt-2 mb-3 ml-auto mr-auto w-75 btn btn-info" data-dismiss="modal">Return To Homepage
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <BlogList blogs={this.state.blogs} />
                            </div>

                        </div>

                    </div>
                    <div>
                        <EmployeeMain />
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="container mt-3">
                        <BlogList blogs={this.state.blogs} />
                    </div>
                    <div>
                        <EmployeeMain />

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Blogs;
