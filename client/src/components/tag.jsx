import React from 'react';
import { Link } from 'react-router-dom';

const Tag = (props) => {
    return (
        <React.Fragment>
            <li className="nav-item">
                <a className="nav-link text-info" href="#">{props.tag.name}&nbsp;&nbsp;</a>
            </li>

            {/* <Link to={`/blogs/${props.blog.id}`} className="SubmitBtn d-block mt-3 mb-3 w-100 btn btn-outline-secondary">View Story</Link> */}

        </React.Fragment>
    );
};

export default Tag;
