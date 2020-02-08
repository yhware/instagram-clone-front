/**
 *   @Author Daniel (yu hong) Kim
 **/

import React from 'react';
import styled from 'styled-components'
import RoundPicture from "./RoundPicture";

const Wrapper = styled.div`
  display: flex;
  height: 52px;
`;

const StoryProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

const Username = styled.div`
  margin-bottom: 2px;
  & a {
    color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    font-weight: 600;
  }
`;

const HoursAgo = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 12px;
  color: #999;
  color: rgba(var(--f52,153,153,153),1);
`;

const StoryRow = ({profilePhoto, username, hoursAgo}) => {
  return (
    <Wrapper>
      <StoryProfile>
        <RoundPicture
          img={profilePhoto}
        />
      </StoryProfile>
      <UserInfo>
        <Username><a>{username}</a></Username>
        <HoursAgo>{hoursAgo} HOURS AGO</HoursAgo>
      </UserInfo>

    </Wrapper>
  );
};

StoryRow.propTypes = {};

export default StoryRow;