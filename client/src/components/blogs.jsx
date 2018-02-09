import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogForm from './blogForm';
import BlogList from './blogList';
import Tags from './tags';

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
            ]
        }; 
    }

    componentDidMount() {
        this.getBlogs();
    }

    getBlogs() {
        fetch('/api/blogs/')
            .then((response) => { 
                return response.json();
            }).then((blogs) => {
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
        console.log(blog);
        fetch('/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                blog
            )
        }).then(() => {
            this.getBlogs();
        }).catch((err) => {
            console.log(err); 
        });
    }

    render() {
        return (
            <div className="container">
                    <BlogForm postBlog={(blog) => { this.addBlog(blog); }} />

                    <Tags />
                    
                    <BlogList blogs={this.state.blogs} />
                    
                
            </div>
        );
    }
}

export default Blogs;
