import React from 'react';
import styled from 'styled-components';
import { mq } from './media-queries';

const QuestionsWrapper = styled.div`
    background: #f7f7f7;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    padding: 20px;
    ${mq.handheld`
      grid-template-columns: repeat(2, 1fr);
      padding: 50px 70px;
    `}
    ${mq.desktop`
      padding: 90px 160px;
      margin: 4rem auto;
    `}
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
      {answer.bestView ? (
        <div>
          <QuestionTitle>Best View</QuestionTitle>
          <p>{answer.bestView}</p>
        </div>
      ) : (
        <div />
      )}

      {answer.interestingThing ? (
        <div>
          <QuestionTitle>Most interesting thing I learnt</QuestionTitle>
          <p>{answer.interestingThing}</p>
        </div>
      ) : (
        <div />
      )}

      {answer.favouriteMoment ? (
        <div>
          <QuestionTitle>Favourite Moment</QuestionTitle>
          <p>{answer.favouriteMoment}</p>
        </div>
      ) : (
        <div />
      )}

      {answer.enjoyableMeal ? (
        <div>
          <QuestionTitle>Most enjoyable meal</QuestionTitle>
          <p>{answer.enjoyableMeal}</p>
        </div>
      ) : (
        <div />
      )}

      {answer.biggestSurprise ? (
        <div>
          <QuestionTitle>Biggest Surprise</QuestionTitle>
          <p>{answer.biggestSurprise}</p>
        </div>
      ) : (
        <div />
      )}

      {answer.topTip ? (
        <div>
          <QuestionTitle>Top tip</QuestionTitle>
          <p>{answer.topTip}</p>
        </div>
      ) : (
        <div />
      )}
    </QuestionsWrapper>
  );
}

export default Questions;
