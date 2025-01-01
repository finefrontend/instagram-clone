import React from 'react';
import styled from 'styled-components';

const LibraryItem = ({ image, handleChangeImage }) => {
  return (
    <LibraryItemWrapper
      onClick={() => {
        handleChangeImage(image);
      }}
    >
      <img src={`/assets/images/library/${image}`} />
    </LibraryItemWrapper>
  );
};

const LibraryItemWrapper = styled.div`
  width: 25%;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default LibraryItem;
