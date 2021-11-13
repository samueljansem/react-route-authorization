import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Login, Home, Detail } from '../components';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../hooks';

const Routes = () => {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/detail">Detail (Protected)</Link>
        </li>
      </ul>
      {isAuth ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <ProtectedRoute path="/detail" component={Detail} auth={isAuth} />
      </Switch>
    </Router>
  );
};

export default Routes;
