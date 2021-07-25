import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AppBar from './components/AppBar';
import routes from './routes';
import { getCurrentUser } from './redux/auth';
import { PrivateRoute, PublicRoute } from './RoutesHOC';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LogInPage = lazy(() =>
  import('./views/LogInPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Switch>
        <PublicRoute exact path={routes.home}>
          <HomePage />
        </PublicRoute>
        <PublicRoute path={routes.logIn} restricted>
          <LogInPage />
        </PublicRoute>
        <PublicRoute path={routes.register} restricted>
          <RegisterPage />
        </PublicRoute>
        <PrivateRoute path={routes.contacts}>
          <ContactsPage />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};

export default App;
