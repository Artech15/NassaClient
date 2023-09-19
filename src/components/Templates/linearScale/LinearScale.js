import React from 'react';
import { Container, Title } from '../style';
import { FlexContainer, ScaleContainer } from './style';

export default function LinearScale({data, setData}) {
    const handleChange = (id) => {
        const updatedScale = [...data.scale]; 
        updatedScale[id].value = !updatedScale[id].value; 
        setData({ ...data, scale: updatedScale });
    };

    return(
        <Container>
            <Title>סולם לינארי</Title>
            <FlexContainer>
            {data.scale.map((num, id) => (
                <ScaleContainer>
                <div>{num.number}</div>
                <input
                    name={num}
                    type='radio' // Use checkboxes for multiple selections
                    checked={num.value}
                    onChange={() => handleChange(id)}
                />
                </ScaleContainer>
            ))}
            </FlexContainer>
        </Container>
    )
}