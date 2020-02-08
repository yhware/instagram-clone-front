/**
 *   @Author Daniel (yu hong) Kim
 **/
import React from 'react';
import styled from 'styled-components'
import RoundPicture from "./RoundPicture";
import profilePhoto from '../images/instagram_sample_profile_photo.jpg'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const UserInfoSection = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

const Username = styled.div`
  margin-bottom: 2px;
  //padding-left: 3px;
  & a {
    color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    font-weight: 600;
  }
`;
const FullName = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SimpleProfile = props => {
  return (
    <Wrapper>
      <RoundPicture
        img={profilePhoto}
        size={50}
      />
      <UserInfoSection>
        <Username><a>somin333</a></Username>
        <FullName>Somin Kim</FullName>
      </UserInfoSection>

    </Wrapper>
  );
};

SimpleProfile.propTypes = {};

export default SimpleProfile;