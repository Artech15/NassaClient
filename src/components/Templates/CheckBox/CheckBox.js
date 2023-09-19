import React from 'react';
import { Container, Title } from '../style';

export default function CheckBox({ data, setData }) {
  const handleChange = (id) => {
    console.log(id)
    const updatedQuestions = [...data.questions]; // Create a copy of the questions array
    console.log(updatedQuestions[id].value)
    updatedQuestions[id].value = !updatedQuestions[id].value; // Toggle the value
    setData({ ...data, questions: updatedQuestions }); // Update the data state
  };

  return (
    <Container>
      <Title>{data.title}</Title>
      {data.questions.map((question, id) => (
        <div key={id} style={{ display: 'flex' }}>
          <div>{question.title}</div>
          <input
            name={question.title}
            type='radio' // Use checkboxes for multiple selections
            checked={question.value}
            onChange={() => handleChange(id)}
          />
        </div>
      ))}
    </Container>
  );
}
