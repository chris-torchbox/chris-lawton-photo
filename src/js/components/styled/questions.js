import React from 'react';
import styled from 'styled-components';

const QuestionsWrapper = styled.div`
    background: #f7f7f7;
    margin: 4rem auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    padding: 90px 160px;
`;

const QuestionTitle = styled.h5`
    margin: 0 0 5px;
    font-family: 'Playfair Display';
    font-size: 20px;
`;

function Questions() {
  return (
    <QuestionsWrapper>
      <div>
        <QuestionTitle>Best View</QuestionTitle>
        <p>Some text here</p>
      </div>
      <div>
        <QuestionTitle>Most interetsing thing I learnt</QuestionTitle>
        <p>Some text here</p>
      </div>
      <div>
        <QuestionTitle>Favourite Moment</QuestionTitle>
        <p>Some text here</p>
      </div>
      <div>
        <QuestionTitle>Most enjoyable meal</QuestionTitle>
        <p>Some text here</p>
      </div>
      <div>
        <QuestionTitle>Biggest Surprise</QuestionTitle>
        <p>Some text here</p>
      </div>
      <div>
        <QuestionTitle>Top tip</QuestionTitle>
        <p>Some text here</p>
      </div>
    </QuestionsWrapper>
  );
}

export default Questions;
