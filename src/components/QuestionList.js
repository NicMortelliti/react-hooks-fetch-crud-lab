import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function handleDeleteItem(deletedQuestion) {
    const updatedQuestions = questions.filter(
      question => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
