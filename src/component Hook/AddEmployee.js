import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import { addEmployee } from '../store/actions/employeeAction';
import HomePage from './HomePage';

const AddEmployee = () => {
    const [Employee, setEmployee] = useState({
        id: '',
        name: '',
        email: '',
        age: '',
        type: '',
    })
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setEmployee({
            ...Employee,
            [event.target.name]: [event.target.value]
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addEmployee(Employee))
        setEmployee({
            id: Math.random().toString(36).substr(2, 9),
            name: '',
            email: '',
            age: '',
            type: '',
        })
    }
    return (
        <div className="container" style={{ margin: "4rem auto" }}>
            <HomePage />
            <div className="row">
                <form className="col s12" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="name" className="validate" onChange={(e) => changeHandler(e)} value={Employee.name} />
                            <label>First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="email" name="email" className="validate" onChange={(e) => changeHandler(e)} value={Employee.email} />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="number" name="age" className="validate" onChange={(e) => changeHandler(e)} value={Employee.age} />
                            <label>Age</label>
                        </div>
                    </div>
                    <div className="row">
                        <label>Type Select</label>
                        <select name="type" className="browser-default" onChange={changeHandler} value={Employee.type}>
                            <option value="" disabled>Choose your option ...</option>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <button className="btn blue mr-3">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                            <button className="btn blue">
                                Reset
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddEmployee
