import React from 'react';
import styled from 'styled-components';

const LibraryItem = ({ image }) => {
  return (
    <LibraryItemWrapper>
      <img src={`/assets/images/library/${image}.png`} />
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
  }
`;

export default LibraryItem;
