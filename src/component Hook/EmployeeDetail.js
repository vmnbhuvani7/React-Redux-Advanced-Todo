import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../store/actions/employeeAction';

const EmployeeDetail = (props) => {
    // debugger
    const employee = props.post
    const dispatch = useDispatch();
    return (
        <>
            {/* {props.post.type==="Employee" && ( */}
            <div className="col s12 m6">
                <div className="card ">
                    <div className="card-content">
                        <span className="card-title">{employee.name}</span>
                        <p>Age:&nbsp; {employee.age}</p>
                        <p>Email:&nbsp; {employee.email}</p>
                        <p>Type:&nbsp; {employee.type}</p>
                    </div>
                    <div className="card-action">
                        <button className="btn red" onClick={() => dispatch(deleteEmployee(employee.id))}>Delete</button>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default EmployeeDetail
