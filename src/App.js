import React, { Component } from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// <=== Components ===>//

import Navbar from './components/Navbar/Navbar'

// <=== local imports ===>//
import logo from './logo.svg'
import { Hero } from './components/Hero/Hero'

// <=== Theme ===>//
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  typography: {},
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Hero />
        <Navbar />
      </MuiThemeProvider>
    )
  }
}

export default App
