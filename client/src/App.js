import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import CreateEmployee from './components/CreateEmployee'
import EditEmployee from './components/EditEmployee'
import EmployeesList from './components/EmployeesList'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={EmployeesList} />
        <Route exact path="/edit/:id" component={EditEmployee} />
        <Route exact path="/create" component={CreateEmployee} />
      </Switch>

    </div>
  );
}

export default App;
