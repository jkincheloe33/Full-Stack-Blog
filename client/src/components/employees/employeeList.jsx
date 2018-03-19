import React, { Component, Fragment, Link } from 'react';

class EmployeeList extends Component {
    render() {
        return (

            <div className="row">
                <div className="mt-2 mb-2 col-md-6 col-xl-4">
                    <div className="card mb-4 box-shadow">
                        <div className="employee-title">
                            <img className="card-img-top employee-img" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="../../img/josh2.jpg" data-holder-rendered="true" />                       
                            <h2>About</h2>
                        </div>    
                            <div className="card-body">
                                <p className="card-text">At 28 years old, Josh Kincheloe is happily married and raising two cats. Lives in Nashville, TN and enjoys music, traveling, and the outdoors.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="mt-2 mb-2 col-md-6 col-xl-4">
                    <div className="card mb-4 box-shadow">
                        <div className="employee-title">
                            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="../../img/josh2.jpg" data-holder-rendered="true"  />
                            <h2>Skills</h2>
                        </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Enjoys design and front-end developement.<br/> 
                                    Skills: HTML5, CSS3, Javascript(ES6), jQuery, React, React-Native, MySQL, Git.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="mt-2 mb-2 col-md-6 col-xl-4">
                    <div className="card mb-4 box-shadow">
                        <div className="employee-title">
                            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="../../img/josh2.jpg" data-holder-rendered="true"  />
                            <h2>Fun Fact</h2>
                        </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Spend the last ten years as a professional musician, touring all over the world. Has performed on three continents, in dozens of countries, and hundreds of cities.   
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        {/* <Link className="nav-button ml-auto btn btn-warning my-2 my-sm-0 w-10" to="/gitHub">GitHub</Link> */}
                                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                        );
                    }
                }
                
export default EmployeeList;