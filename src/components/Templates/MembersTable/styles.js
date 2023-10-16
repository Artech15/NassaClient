import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledCell = styled(TableCell)((props) => ({
    '&&': {
      color: props.type === 'title' ? 'rgb(191, 191, 191)' : '#6c6b6b',
      textAlign: 'center',
      fontFamily: props.type === 'name' ? 'AssistantBold' : undefined,
      fontWeight: props.type === 'row' ? '100' : undefined,
      borderColor: 'transparent',
      ...props.styles
    }
}));

export const HeaderRow = styled(TableRow)(() => ({
    '&&': {
      color: '#6c6b6b',
      backgroundColor: '#f6f6f6',
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

export const ColumnsDiv = styled.button((props) => ({
  '&&':{
    borderStyle: 'solid',
    borderRadius: '.6rem',
    borderColor: grey[400],
    lineHeight: '2.2',
    width: '9rem',
    borderWidth: '1px',
    backgroundColor: props.clicked ? grey[300]: undefined
  },
  '&:hover': {
    backgroundColor: grey[300],
    cursor: 'pointer',
  }
}));
