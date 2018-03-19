import React, { Component, Fragment } from 'react';
import Blog from './blog';

class BlogList extends Component { 
    render() {
        return (
            <div className="row">

                {this.props.blogs.map((blog) => {
                    return (
                        <div className="animated fadeInUpBig mt-2 mb-2 col-md-6 col-xl-4">
                            <Blog key={blog.id} blog={blog} />
                        </div>
                    );
                })}
            
            </div>
        );
    }
}

export default BlogList;