/**
 *   @Author Daniel (yu hong) Kim
 **/

import React from 'react';
import styled from "styled-components";

const Img = styled.img`
  width: 293px;
  height: 293px;
`;

const ProfilePost = ({postImg}) => {
  return (
    <div>
      <Img src={postImg}/>
    </div>
  );
}


ProfilePost.propTypes = {};


export default ProfilePost;