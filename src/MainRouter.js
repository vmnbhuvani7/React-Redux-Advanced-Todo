import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddManager from './component Hook/AddManager';
import HomePage from './component Hook/HomePage';

import ManagerList from './component Hook/ManagerList';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/addManager" component={AddManager} />
                    <Route exact path="/postList" component={ManagerList} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
