import React, { Component, Fragment } from 'react';
import Tag from './tag';

class TagList extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark">
                <a className="navbar-brand" href="#">TAGS:</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                            {this.props.tags.map((tag) => {
                                return (
                                    <Tag key={tag.id} tag={tag} />
                                );
                            })}
                        

                    </ul>
                </div>
            </nav>
        );
    }
}

export default TagList;

