import React, { Component } from 'react';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            tag: ''
        }; 
    }

    handleTitleChange(title) {
        this.setState({ 
            title
        });
    };

    handleContentChange(content) {
        this.setState({ 
            content
        });
    };

    handleTagChange(tag) {
        this.setState({ 
            tag
        });
    };


    render() {
        return (
            <form className="card p-3 m-1 bg-alert-primary d-block">
                <label
                    htmlFor="chirp-input"
                    className="d-block m-2">Create a Blog:
                </label>
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleTitleChange(event.target.value ) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Title"
                />
                <textarea
                    value={this.state.content}
                    onChange={(event) => { this.handleContentChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    rows="5"
                    placeholder="Tell us how you felt after spending hours debugging only to find the issue was a semicolon.">
                </textarea>
                <input
                    value={this.state.tag}
                    onChange={(event) => { this.handleTagChange(event.target.value ) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="#tag"
                />
                <button
                    onClick={() => { this.props.postBlog(this.state) }}
                    type="button"
                    className="SubmitBtn d-block m-2 w-100 btn btn-outline-info">Post!
                </button>
            </form>
        );
    };
}

export default BlogForm;