import React from "react";
import { Container, Title } from "../style";
import CheckIcon from '@mui/icons-material/Check';

export default function CheckBox({ data, setData }) {

  const handleChange = (id) => {
    let updatedQuestions = [...data.questions]; // Create a copy of the questions array
    console.log(updatedQuestions[id].value)
    updatedQuestions[id].value = !updatedQuestions[id].value; // Toggle the value
    setData({ ...data, questions: updatedQuestions }); // Update the data state
  }


  return (
    <Container
    style={{
      top: '3.5rem',
      left: '1rem'
    }}>
      <Title>{data.title}</Title>
      {data.questions.map((question, id) => (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-end"
          }}
        >
          <div>{question.title}</div>

          <input
            name={question.title}
            type="checkbox" // Use checkboxes for multiple selections
            checked={question.value}
            onChange={()=>handleChange(id)}
            style={{
                appearance: 'none',
                backgroundColor: question.value ? 'grey': 'white',
                border: '1px solid black',
                width: '1rem',
                height: '1rem',
                margin: '7px 8px 5px 8px',
                borderStyle: 'solid',
                borderRadius: '0.2rem',
                display: 'grid',
                placeContent: 'center',
                cursor: 'pointer'
            }}
          />
        </div>
      ))}
    </Container>
  );
}
