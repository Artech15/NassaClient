import styled from "styled-components";
import { Input } from '@mui/material';

export const Container = styled.div((porps) => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#eaebef',
    textAlign: '-webkit-center',
    position: 'fixed',
    top: '0',
    left: '0'
}));

export const WhiteContainer = styled.div(() => ({
    width: '20rem',
    height: 'auto',
    minHeight: '18rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    textAlign: 'right',
    marginTop: '5rem',
    padding: '1.2rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
}));

export const Title = styled.div((props) => ({
    width: '100%',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    ...props.styles
}));

export const Text = styled.div(() => ({
    textAlign: 'right',
    fontSize: '1rem',
    color: 'rgb(117,117,117)',
    direction: 'rtl',
    alignSelf: 'end',
    marginRight: '1rem'
}));

export const SaveButton = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: rgb(30, 37, 246);
  color: white;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add transition for background-color */
  font-weight: bold;

  &:hover {
    background-color: #6e6e6e;
  }
`;

export const StyledInput = styled(Input)`
  width: 90%;
  padding: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  direction: rtl
`;