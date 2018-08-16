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
    <h2>Locations</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

const News = () => (
  <div>
    <h2>News</h2>
  </div>
)

const City = ({ match }) => (
  <div>
    <h3>{match.params.cityId}</h3>
  </div>
)

const Cities = ({ match }) => (
  <div>
    <h2>Cities</h2>
    <ul>
      <li>
        <Link to={`${match.url}/atlanta`}>
          Atlanta
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/charlotte`}>
          Charlotte
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/new-york`}>
          New York
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:cityId`} component={City} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a city.</h3>}
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
        <Button><Link to='/news'>News</Link></Button>
        <Button><Link to='/cities'>Cities</Link></Button>
      </Nav>

      <Route exact path='/' component={Home} />
      <Route path='/males-4-hire' component={Males} />
      <Route exact path='/muscle-men' component={Muscle} />
      <Route exact path='/locations' component={Locations} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/news' component={News} />
      <Route path='/cities' component={Cities} />
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
    text-decoration: none;
    color: black;

    @media(max-width: 800px) {
      font-size: .8rem;
    }
  }

  @media(max-width: 800px){
    justify-content: space-between;
  }
`
