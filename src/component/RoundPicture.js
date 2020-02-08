/**
 *   @Author Daniel (yu hong) Kim
 **/

import React from 'react';
import styled from 'styled-components'


const Round = styled.div`
  & a {
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
    overflow: hidden;
    box-sizing: border-box;
    display: block;
  
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;


const RoundPicture = ({img, size = 32}) => {
  return (
    <Round size={size}>
      <a>
        <img src={img}/>
      </a>
    </Round>
  );
};

RoundPicture.propTypes = {};

export default RoundPicture;