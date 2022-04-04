import React from "react";

function QuestionItem({ question, setQuestions, onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => onDeleteItem(question));
  }

  function handleChange(event) {
    const newCorrectAnswerID = event.target.value;
    fetch(`http://localhost:4000/questions/${newCorrectAnswerID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCorrectAnswerID),
    })
      .then(r => r.json())
      .then(() => setQuestions());
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
