import React from 'react';
import styled from 'styled-components';

export default function Story({ isNew, profile, nickname }) {
  return (
    <StyledStory className={isNew ? 'new' : ''}>
      <div className="user_thumb_img">
        <img src={profile} alt={profile} />
      </div>
      <div className="user_id s_text">{nickname}</div>
    </StyledStory>
  );
}

const StyledStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  text-align: center;

  .user_id {
    width: 62px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .user_thumb_img {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 5px;
    border: 3px solid #c7c7cc;
  }

  &.new .user_thumb_img {
    border: 3px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, red 0%, orange 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .user_thumb_img img {
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;
