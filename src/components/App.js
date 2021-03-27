import SignUp from './SignUp'
import SignIn from './SignIn'
import Chat from './Chat'
import Page404 from './Page404';
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import React from 'react';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <Switch>
      <Route exact path='/sign-up'>
        <SignUp />
      </Route>
      <Route exact path='/sign-in'>
        <SignIn />
      </Route>
      <ProtectedRoute exact path='/' loggedIn={loggedIn}>
        <Chat />
      </ProtectedRoute>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
