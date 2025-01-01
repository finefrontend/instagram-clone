import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleChangeStep, handleSubmit, step, isSelectedImage }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {step === 0 && (
        <>
          <CancleButton onClick={() => navigate(-1)}>CANCLE</CancleButton>
          <NextButton onClick={() => isSelectedImage && handleChangeStep(1)}>
            NEXT
          </NextButton>
        </>
      )}
      {step === 1 && (
        <>
          <CancleButton onClick={() => handleChangeStep(0)}>BACK</CancleButton>
          <NextButton onClick={handleSubmit}>DONE</NextButton>
        </>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 13px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const CancleButton = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.33000001311302185px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const NextButton = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.33000001311302185px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #3897f0;
`;

export default Header;
