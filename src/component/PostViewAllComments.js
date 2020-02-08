/**
 *   @Author Daniel (yu hong) Kim
 **/

import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-bottom: 4px;
`;

const A = styled.a`
  background: 0 0;
  border: 0;
  color: #999;
  color: rgba(var(--f52,153,153,153),1);
  line-height: inherit;
  margin: 0;
  padding: 0;
  
  &:visited {
    color: #003569;
    color: rgba(var(--fe0,0,53,105),1);
    text-decoration: none;
  }
`;

const PostViewAllComments = ({commentCnt}) => {
  return (
    <Wrapper>
      <A>View all {commentCnt} comments</A>
    </Wrapper>
  );
};

PostViewAllComments.propTypes = {};

export default PostViewAllComments;