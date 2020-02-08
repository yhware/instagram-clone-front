/**
 *   @Author Daniel (yu hong) Kim
 **/
import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
`;

const Username = styled.a`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  margin-left: -5px;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
`;

const CommentContent = styled.span`
  
`;

const Comment = ({username, content}) => {
  return (
    <Wrapper>
      <Username>{username}</Username>
      &nbsp;
      <CommentContent>{content}</CommentContent>
    </Wrapper>
  );
};

Comment.propTypes = {};

export default Comment;