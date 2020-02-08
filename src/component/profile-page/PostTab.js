/**
 *   @Author Daniel (yu hong) Kim
 **/
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import ProfilePost from "./ProfilePost";
import postPhoto from '../../images/instagram_profile_post_photo.jpg'
import {array_chunks} from '../../common/utils';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const postList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const postChunks = array_chunks(postList, 3);

class PostTab extends PureComponent {
  render() {
    return (
      <Wrapper>
        {
          postChunks.map(postChunk => (
              <PostRow>
                {
                  postChunk.map((post) => (
                      <ProfilePost
                        postImg={postPhoto}
                      />
                    )
                  )
                }
              </PostRow>
            )
          )
        }
      </Wrapper>
    );
  }
}

PostTab.propTypes = {};

export default PostTab;