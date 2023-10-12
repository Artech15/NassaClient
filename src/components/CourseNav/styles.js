import styled from "styled-components"

export const Navbar = styled.div(() => ({
    display: 'flex',
}));

export const NavItem = styled.div((props) =>({
    color: props.selected ? 'white' : 'rgb(215,215,215)',
    height: '1.6rem',
    width: '9rem',
    textAlign: 'center',
    borderBottom: props.selected ? '2px solid white' : '1.5px solid rgb(215,215,215)',
    fontFamily: props.selected ? 'AssistantBold' : 'Assistant',
    cursor: 'pointer'
}));