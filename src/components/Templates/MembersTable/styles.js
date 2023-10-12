import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';

export const StyledCell = styled(TableCell)((props) => ({
    '&&': {
      color: props.type === 'title' ? 'rgb(191, 191, 191)' : '#6c6b6b',
      textAlign: 'center',
      fontFamily: props.type === 'name' ? 'AssistantBold' : undefined,
      fontWeight: props.type === 'row' ? '100' : undefined,
      ...props.styles
    }
}));


export const HeaderRow = styled(TableRow)(() => ({
    '&&': {
      color: '#6c6b6b',
      backgroundColor: '#f6f6f6'
    //   textAlign: 'center',
    }
}));

export const MermbersToggle = styled.div((props) => ({
    width: '5rem',
    height: '2rem',
    borderRadius: '.6rem',
    color: props.selected ? 'white' : undefined,
    backgroundColor: props.selected ? '#617dcc' : null,
    lineHeight: '2.2',
    cursor: 'pointer'
}));
