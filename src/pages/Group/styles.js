import styled from 'styled-components';

export const Container = styled.div(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    left: '0',
    flexFlow: 'wrap',
    direction: 'rtl'
}));

export const Header = styled.div(() => ({
    width: '100%',
    height: '15rem',
    backgroundColor: '#4d4c4c',
    padding: '2rem 5rem'
}));

export const Logo = styled.h1(() => ({
    fontSize: '2.5rem',
    color: 'white',
    fontWeight: '100',
    marginTop: '0',
    marginRight: '.5rem',
    direction: 'rtl'
}));

export const CourseName = styled.h2(() => ({
    color: 'white',
    fontSize: '2.5rem',
    fontFamily: 'AssistantBold',
    margin: '0',
    marginLeft: '1rem'
}));

export const CourseTime = styled.p(() => ({
    color: 'white',
    fontSize: '1rem',
    marginLeft: '1rem'
}));

export const FlexContainer = styled.div(() => ({
    display: 'flex',
    alignItems: 'baseline'
}));

