import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddEmployee from './component Hook/AddEmployee';
import AddManager from './component Hook/AddManager';
import HomePage from './component Hook/HomePage';

import ManagerList from './component Hook/ManagerList';
import EmployeeList from './component Hook/EmployeeList';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/addManager" component={AddManager} />
                    <Route exact path="/addEmployee" component={AddEmployee} />
                    <Route exact path="/postList" component={ManagerList} />
                    <Route exact path="/employeeList" component={EmployeeList} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
