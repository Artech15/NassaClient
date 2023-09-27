import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.div(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    left: '0',
    flexFlow: 'wrap'
}));

export const StyledTop = styled.div(() => ({
    width: '100%',
    height: '25rem',
    backgroundColor: 'grey',
}));

export const FlexContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    textAlign: 'end',
    right: '0',
    position: 'absolute',
    marginRight: '5%',
    marginTop: '3rem'
}));

export const Title = styled.h1(() => ({
    fontSize: '4rem',
    color: 'white',
    fontWeight: '100',
    marginBottom: '0'
}));

export const Text = styled.h2(() => ({
    fontSize: '1.1rem',
    color: 'white',
    marginTop: '0'
}));

export const StyledInput = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  direction: rtl;
  .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: rgb(191,191,191);
    color: white;
    border-radius: .6rem;
  }
`;

export const StyledBottom = styled.div(() => ({
    width: '100%',
    height: '70rem',
    backgroundColor: 'rgb(241,241,241)',
    display: 'flex',
    justifyContent: 'center'
}));

export const CourseContainer = styled.div(() => ({
    width: '90%',
    height: '40rem',
    borderRadius: '1.3rem',
    backgroundColor: 'white',
    marginTop: '-3rem'
}));

export const MyCoursesTitle = styled.h2(() => ({
    color: 'rgb(117,117,117)',
    direction: 'rtl',
    paddingRight: '2.6rem',
    paddingTop: '1rem',
    fontFamily: 'AssistantBold',
    fontSize: '1.2rem',
    marginBottom: '2rem'
}));

export const GroupsContainer = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(23rem, 18%))',
    gap: '50px',
    direction :'rtl',
    justifyContent: 'center',
    WebkitBoxPack :'center'
}));