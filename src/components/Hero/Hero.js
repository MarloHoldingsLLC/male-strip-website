import React from 'react'
import styled from 'styled-components'

import mainLogo from '../../assets/MM-Web-optimized.gif'

const Hero = props => {
  return (
    <Wrapper>
      <ImageBox>
        <img src={mainLogo} alt='males' />
        <h5>
          MALE STRIPPERS
        </h5>
        <img src={mainLogo} alt='males' />
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
    height: 18rem;
  }

  @media(max-width: 800px) {
    font-size: 1.4rem;
    
    img {
      height: 7rem;
    }
  }
`

export default Hero
