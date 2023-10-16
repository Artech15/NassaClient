import styled from 'styled-components';
import { grey, white } from '@mui/material/colors';

export const Container = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    borderStyle: 'solid',
    borderRadius: '.6rem',
    borderColor: grey[400],
    color:  grey[500],
    fontSize: ".9rem",
    backgroundColor: "white",
    lineHeight: '2.2',
    width: '12rem',
    borderWidth: '1px',
    width: '9rem'
}));

export const Title = styled.div(() => ({
    textAlign: 'right',
    fontWeight: 'bold',
    paddingBottom: '.4rem',
    fontSize: '1.1rem'
}));

