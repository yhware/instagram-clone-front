/**
 *   @Author Daniel (yu hong) Kim
 **/
import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Post from "../component/Post";
import SimpleProfile from "../component/SimpleProfile";
import RoundPaper from "../component/styled/RoundPaper";
import StoryRow from "../component/StoryRow";
import profilePhoto from '../images/instagram_sample_profile_photo.jpg'
import NonCenteredFullPage from "../component/styled/NonCenteredFullPage";

const InnerWrapper = styled.div`
  display: flex;
  position: relative;
`;
const ContentSection = styled.div`
  margin-right: 28px;
`;

const ProfileSection = styled.div`
  margin-bottom: 30px;
  padding: 0;
  top: 60px;
`;

const StoriesSubSection = styled(RoundPaper)`
  padding: 20px 16px;
  min-width: 291px;
`;

const SubSectionTitle = styled.div`
  color: #999;
  color: rgba(var(--f52,153,153,153),1);
  font-weight: 600;
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
`;

const Stories = styled.div`
  margin-top: 8px;
`;

class TimelinePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <NonCenteredFullPage>
        <Header/>
        <InnerWrapper>
          <ContentSection>
            <Post
            ></Post>
            <Post
            ></Post>
          </ContentSection>
          <ProfileSection>
            <SimpleProfile/>
            <StoriesSubSection>
              <SubSectionTitle>Stories</SubSectionTitle>
              <Stories>
                <StoryRow
                  profilePhoto={profilePhoto}
                  hoursAgo={18}
                  username="sominkim"
                />
                <StoryRow
                  profilePhoto={profilePhoto}
                  hoursAgo={18}
                  username="sominkim"
                />
                <StoryRow
                  profilePhoto={profilePhoto}
                  hoursAgo={18}
                  username="sominkim"
                />
              </Stories>
            </StoriesSubSection>
          </ProfileSection>
        </InnerWrapper>
      </NonCenteredFullPage>
    );
  }
}

TimelinePage.propTypes = {};

export default TimelinePage;