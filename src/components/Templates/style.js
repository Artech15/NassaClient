import styled from 'styled-components';

export const Container = styled.div(() => ({
    // right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
    // width: '30rem',
    // position: 'absolute'
}));


export const Title = styled.div(() => ({
    textAlign: 'right',
    fontWeight: 'bold',
    paddingBottom: '.4rem',
    fontSize: '1.1rem'
}));

