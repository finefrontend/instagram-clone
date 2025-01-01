import React from 'react';
import styled from 'styled-components';
import LibraryItem from './LibraryItem';

const images = [
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png',
  'image5.png',
  'image6.png',
  'image7.png',
  'image8.png',
  'image9.png',
  'image10.png',
  'image11.png',
  'image12.png',
  'image13.png',
  'image14.png',
  'image15.png',
  'image16.png',
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png',
  'image5.png',
  'image6.png',
  'image7.png',
  'image8.png',
  'image9.png',
  'image10.png',
  'image11.png',
  'image12.png',
  'image13.png',
  'image14.png',
  'image15.png',
  'image16.png',
];

const Library = ({ handleChangeImage }) => {
  return (
    <LibraryWrapper>
      {images.map((image, index) => (
        <LibraryItem
          key={`library_item_${image}_${index}`}
          image={image}
          handleChangeImage={handleChangeImage}
        />
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
