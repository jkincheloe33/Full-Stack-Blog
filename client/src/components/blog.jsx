import React from 'react';
import { Link} from 'react-router-dom';

const Blog = (props) => {
    return (
        <div className="animated fadeInUpBig card blog-div">
            <div className="card-body text-left">
                <p className="card-title text-warning">
                    <span className="blog-title">{props.blog.title}</span>

                </p>
                <p className="card-text blog-content">
                    {props.blog.content.substring(0, 250)}...
                </p> 

                <Link to={`/blogs/${props.blog.id}`} className="SubmitBtn d-block mt-3 mb-3 w-100 btn btn-outline-warning">Read More</Link>
                
            </div>
        </div>
    ); 
};

export default Blog;
