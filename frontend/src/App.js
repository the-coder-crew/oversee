import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { initializeToken } from './reducers/tokenReducer'
import Home from './components/Home'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { Container } from 'react-bootstrap'

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state)

  useEffect(() => {
    dispatch(initializeToken())
  }, [dispatch])

  return (
    <Router>
      <Container fluid>

        <Switch>
          <Route path="/dashboard">
            {token
              ? <Dashboard />
              : <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            {!token
              ? <Home />
              : <Redirect to="/dashboard" />}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
