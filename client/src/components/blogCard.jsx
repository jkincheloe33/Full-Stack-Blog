import React, { Component } from 'react';
import BlogForm from './blogForm';


class BlogCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {
                content: 'Hello',
                id: 8,

            }
        }
    }

    componentDidMount() {
        this.getBlog();
    }

    getBlog() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((obj) => {
                let blogsArray = obj;
                this.setState({
                    blog: blogsArray
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            alert('Blog successfully deleted! You will automatically be returned to the home page.');
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    updateBlog(blog) {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                blog
            ),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(() => {
            alert('Blog successfully updated!')
        }).catch((err) => {
            console.log(err);
        });
    }

    returnHome(event) {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <div id={this} className="card m-1">
                    <div className="card-body text-left">
                        <p className="card-title">
                            {this.state.blog.title}

                        </p>
                        <p className="card-text">
                            {this.state.blog.content}
                        </p>
                        <button
                            onClick={(event) => { this.handleSubmit(event) }}
                            type="button"
                            className="SubmitBtn d-inline m-2 w-25 btn btn-outline-info">Delete
                        </button>
                        <button
                            type="button"
                            className="SubmitBtn d-inline m-2 w-25 btn btn-outline-info"
                            data-toggle="modal" data-target="#exampleModal">Edit
                        </button>
                    </div>
                </div>
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
                                <BlogForm postBlog={(blog) => { this.updateBlog(blog); }} />
                            </div>
                            <button
                                onClick={(event) => { this.returnHome(event) }}
                                type="button"
                                className="SubmitBtn d-inline mt-2 mb-3 ml-auto mr-auto w-75 btn btn-info" data-dismiss="modal">Return To Homepage
                            </button>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}





export default BlogCard;