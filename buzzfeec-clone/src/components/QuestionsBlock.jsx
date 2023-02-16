import React from "react";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({
  quizItem,
  quizItemId,
  setChosenAnswerItems,
  chosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
}) => {
  return (
    <>
      <h2 id={quizItem.id} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem.questions.map((question, _index) => {
          return (
            <QuestionBlock
              key={_index}
              question={question}
              quizItemId={quizItem.id}
              setChosenAnswerItems={setChosenAnswerItems}
              chosenAnswerItems={chosenAnswerItems}
              unansweredQuestionIds={unansweredQuestionIds}
              setUnansweredQuestionIds={setUnansweredQuestionIds}
            />
          );
        })}
      </div>
    </>
  );
};

export default QuestionsBlock;
