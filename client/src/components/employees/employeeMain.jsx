import React, { Component, Fragment } from 'react';
import EmployeeHeader from './employeeHeader';
import EmployeeList from './employeeList';

class EmployeeMain extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <Fragment>

                <EmployeeHeader />
                <div className="container mt-5">
                    <EmployeeList />
                </div>
                

            </Fragment>
        );
    }
}

export default EmployeeMain