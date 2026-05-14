import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question?.title}</h3>
      <p>{question?.description}</p>
      <div className="question-meta">
        <span className="author">By: {question?.author}</span>
        <span className="date">{question?.date}</span>
      </div>
    </div>
  );
};

export default QuestionCard;
