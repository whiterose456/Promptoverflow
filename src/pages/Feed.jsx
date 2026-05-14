import React from 'react';
import QuestionCard from '../components/QuestionCard';

const Feed = () => {
  const [questions, setQuestions] = React.useState([]);

  return (
    <div className="feed">
      <h1>Questions Feed</h1>
      <div className="questions-list">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
