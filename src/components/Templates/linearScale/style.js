import styled from 'styled-components';

export const FlexContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row-reverse'
}));


export const ScaleContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '1rem'
}));