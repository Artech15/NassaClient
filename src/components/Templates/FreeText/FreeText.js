import React from 'react';
import { TextField } from '@mui/material';
import { Container, Title } from '../style';

export default function FreeText({data, setData}) {
    const handleInputChange = (event, field) => {
        setData({ ...data, [field]: event.target.value })
  };
    return(
        <Container>
            <Title>{data.title}</Title>
            <TextField
                value={data.value}
                onChange={(e) => handleInputChange(e, 'value')}
                placeholder='הכנס טקסט כאן'
                multiline
                rows={3}
                sx={{ direction: 'rtl' ,width: '35%'}}
            />
        </Container>
    )
}