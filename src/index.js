import React from 'react'
import ReactDom from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './App'
import theme from './theme'

ReactDom.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
