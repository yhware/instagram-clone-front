/**
 *   @Author Daniel (yu hong) Kim
 **/
import React, {Component} from 'react';
import Header from "../component/Header";
import RoundPicture from "../component/RoundPicture";
import profilePhoto from '../images/instagram_sample_profile_photo.jpg'
import {Button, Tabs} from "antd";
import NonCenteredFullPage from "../component/styled/NonCenteredFullPage";
import styled from "styled-components";
import PostTab from "../component/profile-page/PostTab";

const {TabPane} = Tabs;

const InnerWrapper = styled.div`
  max-width: 935px;
  width: 100%;
`;
const ProfileSection = styled.div`
  display: flex;
  width: 100%;
`;

const ProfilePicSubSection = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileInfoSubSection = styled.div`
  width: 300px;
  flex-grow: 1;
`;
const Username = styled.span`
    color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    font-size: 28px;
    line-height: 32px;
    margin: -5px 0 -6px;
    font-weight: 300;
`;

const ProfileSectionRow = styled.div`
  margin-bottom: 20px;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  font-size: 16px;
  & strong {
    font-weight: 600;
  }
  display: flex;
  align-items: center;
`;

const EditProfileBtn = styled(Button)`
  margin-left: 30px;
`;

class ProfilePage extends Component {
  render() {
    return (
      <NonCenteredFullPage>
        <Header/>
        <InnerWrapper>
          <ProfileSection>
            <ProfilePicSubSection>
              <RoundPicture
                img={profilePhoto}
                size={150}
              />
            </ProfilePicSubSection>
            <ProfileInfoSubSection>
              <ProfileSectionRow>
                <Username>tresvik331</Username>
                <EditProfileBtn>Edit Profile</EditProfileBtn>
              </ProfileSectionRow>
              <ProfileSectionRow>
                <span style={{marginRight: 40}}><strong>23</strong>&nbsp;posts</span>
                <span style={{marginRight: 40}}><strong>23</strong>&nbsp;followers</span>
                <span><strong>23</strong>&nbsp;following</span>
              </ProfileSectionRow>
              <ProfileSectionRow>
                <strong>Somin Kim</strong>
              </ProfileSectionRow>
            </ProfileInfoSubSection>
          </ProfileSection>
          <Tabs defaultActiveKey="1" onChange={null}>
            <TabPane tab="POSTS" key="POSTS">
              <PostTab/>
            </TabPane>
            <TabPane tab="SAVED" key="SAVED">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="TAGGED" key="TAGGED">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </InnerWrapper>
      </NonCenteredFullPage>
    );
  }
}

export default ProfilePage;