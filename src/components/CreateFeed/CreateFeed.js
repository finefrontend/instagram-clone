import React, { useCallback, useState } from 'react';
import Header from './Header';
import SelectedBox from './SelectedBox';
import Library from './Library';
import styled from 'styled-components';

const CreateFeed = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleChangeImage = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  return (
    <CreateFeedWrapper>
      <Header />
      <SelectedBox selectedImage={selectedImage} />
      <Library handleChangeImage={handleChangeImage} />
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
