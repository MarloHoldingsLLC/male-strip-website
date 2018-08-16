import React from 'react'
import styled from 'styled-components'
import './index.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => (
  <Wrapper>
    <Hero />
    <Navbar />
  </Wrapper>
)

const Wrapper = styled.div`
  background: black;
  color: white;
`

export default App

// import { BrowserRouter, Switch } from 'react-router-dom'
// import Router from './routes'

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Router />
//     </Switch>
//   </BrowserRouter>
// )

// export default App
