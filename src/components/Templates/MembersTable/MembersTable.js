import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { StyledCell, HeaderRow, MermbersToggle } from './styles';

export default function MembersTable({ members }) {
    const [membersToShow, setMembersToShow] = useState('mine');
    
    return( 
        <TableContainer
          sx={{
            width: '40rem',
            margin: '0 auto',
            direction: 'rtl',
            marginTop: '-13rem',
            borderRadius: '1rem'
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
                <HeaderRow>
                    <StyledCell styles={{display: 'flex'}}>
                        <MermbersToggle selected={true}>החניכים שלי</MermbersToggle>
                        <MermbersToggle selected={false}>כל החניכים</MermbersToggle>
                    </StyledCell>
                    <StyledCell></StyledCell>
                    <StyledCell></StyledCell>
                    <StyledCell>חיפוש</StyledCell>
                    <StyledCell>עמודות</StyledCell>
                </HeaderRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <StyledCell type='title'>שם מלא</StyledCell>
                    <StyledCell type='title'>מספר אישי</StyledCell>
                    <StyledCell type='title'>ציון ממוצע</StyledCell>
                    <StyledCell type='title'>מספר משובים</StyledCell>
                    <StyledCell type='title'>התראות</StyledCell>
                </TableRow>
                {members.map(member => {
                    return (
                        <TableRow>
                            <StyledCell type='name'>{member.fullName}</StyledCell>
                            <StyledCell type='row'>{member.personalNumber}</StyledCell>
                            <StyledCell type='row'>0</StyledCell>
                            <StyledCell type='row'>0</StyledCell>
                            <StyledCell type='row'>0</StyledCell>
                        </TableRow>
                    )
                })}
            </TableBody>
          </Table>
        </TableContainer>
    )
}