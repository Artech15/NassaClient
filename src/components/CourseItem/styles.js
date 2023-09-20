import styled from 'styled-components';

export const Container = styled.div(() => ({
    // width: '25rem',
    height: '8rem',
    border: '1px solid rgb(215,215,215)',
    borderRadius: '.5rem',
    padding: '1rem'
}));

export const CourseName = styled.h1(() => ({
    fontSize: '1.5rem',
    color: 'rgb(117,117,117)',
    fontFamily: 'AssistantBold',

    'span': {
        fontFamily: 'Assistant',
        fontSize: '1.3rem'
    }
}));

export const IconContainer = styled.div(() => ({
    display: 'flex',
    width: '30%',
    color: '#72bf6b',
    fontSize: '1rem',
    fontFamily: 'Assistant',
    alignItems: 'center'
}));
