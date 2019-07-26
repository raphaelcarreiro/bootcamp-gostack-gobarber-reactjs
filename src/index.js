import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Dashboard from 'pages/dashboard/Dashboard';
import WrapperRoute from 'routes/WrapperRoute';
import App from 'App';
import SignIn from 'pages/signin/SignIn';
import SignUp from 'pages/signup/SignUp';
import Profile from 'pages/profile/Profile';
import history from 'services/history';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <WrapperRoute exact path="/" component={SignIn} />
        <WrapperRoute exact path="/register" component={SignUp} />
        <WrapperRoute exact path="/dashboard" component={Dashboard} isPrivate />
        <WrapperRoute exact path="/profile" component={Profile} isPrivate />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
