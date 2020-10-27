import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div className="container" style={{ margin: "4rem auto" }}>
            <div className="row">
                <div className="dropdown show col-1">
                    <div className="btn dropdown-trigger  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" >
                        Add </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-item" >  <Link to="/addManager">Add Manager</Link></div>
                        <div className="dropdown-item" ><Link to="/addEmployee">Add Employee</Link></div>
                    </div>
                </div>
                <div className="dropdown show ">
                    <div className="btn dropdown-trigger  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" >
                        View </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-item" ><Link to="/postList">View Manager</Link></div>
                        <div className="dropdown-item" ><Link to="/employeeList">View Employee</Link></div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomePage
