import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { cities } from './citiesArr'

class LocationLinks extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { anchorEl } = this.state
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <Text>Locations</Text>
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {cities.map(items => (
            <MenuItem onClick={this.handleClose}>{items}</MenuItem>
          ))}
          <MenuItem onClick={this.handleClose}>My account</MenuItem>

        </Menu>
      </div>
    )
  }
}

const Text = styled.span`
  line-height: 2rem;
  font-size: 1.3rem;

  @media(max-width: 800px) {
      font-size: .8rem;
    }
`

export default LocationLinks
