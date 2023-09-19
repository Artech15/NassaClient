import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';

export default function EditableTable({ data }) {
  const [rows, setRows] = useState(data.questions);

  const handleInputChange = (event, id, field) => {
    const updatedRows = rows.map((row, idx) =>
      idx === id ? { ...row, [field]: event.target.value } : row
    );
    setRows(updatedRows);
  };

  return (
    <TableContainer
      sx={{
        width: '40rem',
        margin: '0 auto',
        direction: 'rtl',
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            {data.titles.map((title) => (
              <TableCell key={title} align="center">
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.questions.map((question, id) => (
            <TableRow key={id}>
              {data.titles.map(() => (
                <TableCell key={question.value}>
                  <TextField
                    value={question.value}
                    onChange={(e) => handleInputChange(e, id, 'value')}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}