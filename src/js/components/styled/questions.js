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

function Questions(props) {
  const answer = props.answers;
  return (
    <QuestionsWrapper>
      <div>
        <QuestionTitle>Best View</QuestionTitle>
        <p>{answer.bestView}</p>
      </div>
      <div>
        <QuestionTitle>Most interetsing thing I learnt</QuestionTitle>
        <p>{answer.interestingThing}</p>
      </div>
      <div>
        <QuestionTitle>Favourite Moment</QuestionTitle>
        <p>{answer.favouriteMoment}</p>
      </div>
      <div>
        <QuestionTitle>Most enjoyable meal</QuestionTitle>
        <p>{answer.enjoyableMeal}</p>
      </div>
      <div>
        <QuestionTitle>Biggest Surprise</QuestionTitle>
        <p>{answer.biggestSurprise}</p>
      </div>
      <div>
        <QuestionTitle>Top tip</QuestionTitle>
        <p>{answer.topTip}</p>
      </div>
    </QuestionsWrapper>
  );
}

export default Questions;
