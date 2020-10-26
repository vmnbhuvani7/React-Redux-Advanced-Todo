import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div className="container" style={{ margin: "4rem auto" }}>
            <div className="row">
                <div className="dropdown show col-1">
                    <a className="btn dropdown-trigger  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" >
                        Add </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" >  <Link to="/addManager">Add Manager</Link></a>
                        <a className="dropdown-item" ><Link to="/addEmployee">Add Employee</Link></a>
                    </div>
                </div>
                <div className="dropdown show ">
                    <a className="btn dropdown-trigger  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" >
                        View </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" ><Link to="/postList">View Manager</Link></a>
                        <a className="dropdown-item" ><Link to="/employeeList">View Employee</Link></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomePage
