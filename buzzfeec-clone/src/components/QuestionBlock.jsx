import React from "react";

const QuestionBlock = ({
  question,
  setChosenAnswerItems,
  chosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
  quizItemId,
}) => {
  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question.text]);
    setUnansweredQuestionIds(
      unansweredQuestionIds.filter((id) => id !== quizItemId)
    );
  };

  const validPick =
    !chosenAnswerItems.includes(question.text) &&
    !unansweredQuestionIds?.includes(quizItemId);
  return (
    <button
      className="question-block"
      disabled={validPick}
      onClick={handleClick}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.url}>{question.credit} </a>
        <a href="https://unsplash.com">Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;
