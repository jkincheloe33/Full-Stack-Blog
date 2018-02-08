import React from 'react';
import { Link} from 'react-router-dom';

const Blog = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-title">
                    {props.blog.title}

                </p>
                <p className="card-text">
                    {props.blog.content}
                </p>

                <Link to={`/blogs/${props.blog.id}`} className="SubmitBtn d-block mt-3 mb-3 w-100 btn btn-outline-secondary">View Story</Link>
                
            </div>
        </div>
    ); 
};

export default Blog;
