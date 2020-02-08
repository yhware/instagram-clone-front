/**
 *   @Author Daniel (yu hong) Kim
 **/
import React from 'react';
import styled from "styled-components";
import postImg from '../images/sample_post_image.jpg'
import LikeIcon from "./styled/icon/LikeIcon";
import CommentIcon from "./styled/icon/CommentIcon";
import BookmarkIcon from "./styled/icon/BookmarkIcon";
import IconButton from "./styled/IconButton";
import Comment from "./Comment";
import PostViewAllComments from "./PostViewAllComments";
import profilePhoto from "../images/instagram_sample_profile_photo.jpg";
import MoreIcon from "./styled/icon/MoreIcon";
import ShareIcon from "./styled/icon/ShareIcon";

const Wrapper = styled.article`
  background-color: rgba(var(--cdc,255,255,255),1);
  border: 1px solid rgba(var(--b6a,219,219,219),1);
  border-radius: 3px;
  margin-bottom: 60px;
  max-width: 614px;
`;

const ProfileRow = styled.header`
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 16px;
  position: relative;
`;

const RoundProfilePhoto = styled.div`
  & a {
    width: 32px;
    height: 32px;
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

const Username = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  color: rgba(var(--i1d,38,38,38),1);
    font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
`;

const MediaRow = styled.div`

`;

const ReactionRow = styled.div`
  margin-top: 3px;
`;

const Section = styled.section`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
`;

const ButtonSection = styled(Section)`
`;

const BookmarkButton = styled(IconButton)`
  margin-left: auto;
  margin-right: -10px;
`;

const LikeSection = styled(Section)`
`;

const CommentSection = styled(Section)`
  margin-top: 3px;
  flex-flow: column;
`;

const PostTimestamp = styled.div`
  padding-left: 16px;
  margin-bottom: 8px;
  
  & a{
    color: rgba(var(--f52,153,153,153),1);
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: .2px;
  }
`;

const WriteCommentSection = styled(Section)`
  margin-top: 4px;
  border-top: 1px solid #efefef;
  border-top: 1px solid rgba(var(--ce3,239,239,239),1);
  color: #999;
  color: rgba(var(--f52,153,153,153),1);
  flex-shrink: 0;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  justify-content: center;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const CommentTextarea = styled.textarea`
    background: 0 0;
    border: 0;
    color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-grow: 1;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
    
`;

const CommentPostButton = styled.button`
    border: 0;
    color: #3897f0;
    color: rgba(var(--h5f,56,151,240),1);
    display: inline;
    padding: 0;
    position: relative;
    background: transparent;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    
    &:disabled{
      opacity: .3;
    }
`;

const MoreButton = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 12px;
`;

const PostPhoto = styled.img`
  width: 100%;
`;


const Post = props => {
  return (
    <Wrapper>
      <ProfileRow>
        <RoundProfilePhoto>
          <a>
            <img src={profilePhoto}/>
          </a>
        </RoundProfilePhoto>
        <Username>jsomin86</Username>
        <MoreButton>
          <MoreIcon/>
        </MoreButton>
      </ProfileRow>
      <MediaRow>
        <PostPhoto src={postImg}/>
      </MediaRow>
      <ReactionRow>
        <ButtonSection>
          <IconButton>
            <LikeIcon/>
          </IconButton>
          <IconButton>
            <CommentIcon/>
          </IconButton>
          <IconButton>
            <ShareIcon/>
          </IconButton>
          <BookmarkButton>
            <BookmarkIcon/>
          </BookmarkButton>
        </ButtonSection>
        <LikeSection>
          Liked by&nbsp;<strong>claudiabehringer</strong>&nbsp;and&nbsp;<strong>others</strong>
        </LikeSection>
        <CommentSection>
          <Comment username="yuhongkim" content="언니가 예뻐,,0"/>
          <PostViewAllComments commentCnt={1176}>View all 1,176 comments</PostViewAllComments>
          <Comment username="yuhongkim" content="언니가 예뻐,,0"/>
          <Comment username="yuhongkim" content="언니가 예뻐,,0"/>
        </CommentSection>
        <PostTimestamp><a>1 DAY AGO</a></PostTimestamp>
        <WriteCommentSection>
          <CommentForm>
            <CommentTextarea placeholder="Add a comment...">

            </CommentTextarea>
            <CommentPostButton>Post</CommentPostButton>
          </CommentForm>
        </WriteCommentSection>
      </ReactionRow>
    </Wrapper>
  );
};

Post.propTypes = {};

export default Post;