import fp from 'lodash/fp'
import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
/* Routes */
import Hello from './hello'
import Dashboard from './dashboard'

const routes = [Dashboard, Hello]

const mapRoutes = fp.map(route => (
  <Route {...route} key={route.path} component={route.Component} />
))

const RouterComponent = props => {
  return (
    <Fragment>
      {mapRoutes(routes)}
    </Fragment>
  )
}

export default RouterComponent
