import React from 'react';
import { Navbar, NavItem } from './styles';
export default function CourseNav({page, setPage}) {
    return (
        <Navbar>
            <NavItem selected={page === 1} onClick={() => setPage(1)}>עמוד קורס</NavItem>
            <NavItem selected={page === 2} onClick={() => setPage(2)}>ניהול חניכים</NavItem>
            <NavItem selected={page === 3} onClick={() => setPage(3)}>ניהול קורס</NavItem>
        </Navbar>
    )
}