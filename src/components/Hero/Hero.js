import React from 'react'
import styled from 'styled-components'

import mainLogo from '../../assets/MM-Web-optimized.gif'

export const Hero = props => {
  return (
    <Wrapper>
      <ImageBox>
        <img src={mainLogo} />
        <h5>
          MALE STRIPPERS
        </h5>
        <img src={mainLogo} />
      </ImageBox>

    </Wrapper>
  )
}

const Wrapper = styled.header`
  
`
const ImageBox = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 3rem;
  img {
    height: 9rem;
  }

  @media(max-width: 600px) {
    font-size: 1rem;
    
    img {
      height: 5rem;
    }
  }
`
