import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import ResetPassword from './components/auth/reset_password';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome} />
		<Route path="signin" component={Signin} />
		<Route path="signout" component={Signout} />
		<Route path="signup" component={Signup} />
		<Route path="reset-password/:token" component={ResetPassword} />
		<Route path="feature" component={RequireAuth(Feature)} />
	</Route>
);
