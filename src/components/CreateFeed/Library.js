import React from 'react';
import styled from 'styled-components';
import LibraryItem from './LibraryItem';

const images = [
  'image1',
  'image2',
  'image3',
  'image4',
  'image5',
  'image6',
  'image7',
  'image8',
  'image9',
  'image10',
  'image11',
  'image12',
  'image13',
  'image14',
  'image15',
  'image16',
  'image1',
  'image2',
  'image3',
  'image4',
  'image5',
  'image6',
  'image7',
  'image8',
  'image9',
  'image10',
  'image11',
  'image12',
  'image13',
  'image14',
  'image15',
  'image16',
];

const Library = () => {
  return (
    <LibraryWrapper>
      {images.map((image) => (
        <LibraryItem key={`library_item_${image}`} image={image} />
      ))}
    </LibraryWrapper>
  );
};

const LibraryWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow-y: auto;
`;

export default Library;
