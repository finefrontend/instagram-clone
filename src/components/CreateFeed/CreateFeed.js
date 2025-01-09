import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SelectedBox from './SelectedBox';
import Library from './Library';
import InputArea from './InputArea';

const CreateFeed = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [step, setStep] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleChangeImage = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleChangeStep = useCallback((value) => {
    setStep(value);
  }, []);

  const handleChageTextarea = useCallback((e) => {
    setTextareaValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    const newContentNo = state[0].contentNo + 1;

    navigate('/', {
      state: [
        {
          contentNo: newContentNo,
          nickname: 'user1',
          country: 'Seoul, South Korea',
          profile: '/assets/images/thumb.png',
          imageSrc: `/assets/images/library/${selectedImage}`,
          likeCount: 2346,
          text: textareaValue,
        },
        ...state,
      ],
    });
  }, [navigate, selectedImage, state, textareaValue]);

  return (
    <CreateFeedWrapper>
      <Header
        handleChangeStep={handleChangeStep}
        handleSubmit={handleSubmit}
        step={step}
        isSelectedImage={!!selectedImage}
      />
      {step == 0 && (
        <>
          <SelectedBox selectedImage={selectedImage} />
          <Library handleChangeImage={handleChangeImage} />
        </>
      )}
      {step == 1 && (
        <InputArea
          handleChageTextarea={handleChageTextarea}
          textareaValue={textareaValue}
        />
      )}
    </CreateFeedWrapper>
  );
};

const CreateFeedWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  background: linear-gradient(135deg, #f3f4f6, #e8eaed);
`;

export default CreateFeed;
