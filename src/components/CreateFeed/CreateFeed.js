import React from 'react';
import Header from './Header';
import SelectedBox from './SelectedBox';
import Library from './Library';
import styled from 'styled-components';

const CreateFeed = () => {
  return (
    <CreateFeedWrapper>
      <Header />
      <SelectedBox />
      <Library />
    </CreateFeedWrapper>
  );
};

const CreateFeedWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;

export default CreateFeed;
