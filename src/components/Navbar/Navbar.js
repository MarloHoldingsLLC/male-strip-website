import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import LocationLinks from './LocationLinks'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Males = () => (
  <div>
    <h2>Males</h2>
  </div>
)
const Muscle = () => (
  <div>
    <h2>Muscle</h2>
  </div>
)

const Locations = () => (
  <div>
    <h2>Loactions</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)

const Navbar = () => (
  <Router>
    <div>
      <Nav>
        <Button><Link to='/'>Home</Link></Button>
        <Button><Link to='/males-4-hire'>Male Stripper 4 hire</Link></Button>
        <Button><Link to='/muscle-men'>Muscle Men</Link></Button>
        <Link to='/locations'><LocationLinks /></Link>
        <Button><Link to='/contact'>Contacts</Link></Button>
        <Button><Link to='/topics'>Topics</Link></Button>
      </Nav>

      <Route exact path='/' component={Home} />
      <Route path='/males-4-hire' component={Males} />
      <Route exact path='/muscle-men' component={Muscle} />
      <Route exact path='/locations' component={Locations} />
      <Route exact path='/contact' component={Contact} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
)
export default Navbar

const Nav = styled.nav`
  background: white;
  color: black;
  display: flex;
  justify-content: space-around;
  height: 3rem;

  a {
    font-size: 1.4rem;
  }
`
