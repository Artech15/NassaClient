import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';

export const Container = styled.div(() => ({
    // width: '25rem',
    height: '9rem',
    border: '1px solid rgb(215,215,215)',
    borderRadius: '.5rem',
    padding: '0 1rem'
}));

export const CourseName = styled.h1(() => ({
    fontSize: '1.5rem',
    color: 'rgb(117,117,117)',
    fontFamily: 'AssistantBold',
    marginTop: '.2rem',
    'span': {
        fontFamily: 'Assistant',
        fontSize: '1.3rem'
    },
}));

export const IconContainer = styled.div((props) => ({
    display: 'flex',
    width: 'auto',
    color: props.green ? '#72bf6b' : 'rgb(215,215,215)',
    fontSize: '.9rem',
    fontFamily: 'Assistant',
    alignItems: 'center',
    marginLeft: '1.2rem'
}));

export const FlexContainer = styled.div(() => ({
    display: 'flex'
}));

export const ParentName = styled.h1(() => ({
    fontSize: '1rem',
    color: 'rgb(117,117,117)',
    marginTop: '.2rem',
    'span': {
        fontFamily: 'Assistant',
        fontSize: '1rem'
    },
}));