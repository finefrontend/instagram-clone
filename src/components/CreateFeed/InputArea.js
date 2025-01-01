import React from 'react';
import styled from 'styled-components';

const InputArea = ({ handleChageTextarea, textareaValue }) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea onChange={handleChageTextarea} value={textareaValue} />
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.section`
  width: 100%;
  padding: 0 16px;
  margin-top: 24px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  resize: none;
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  transition: all 0.3s ease;
  background: #fff;
  color: #333;

  &:focus {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    background: #f9f9f9;
  }
`;

export default InputArea;
