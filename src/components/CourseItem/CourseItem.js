import React, { useEffect, useState } from 'react';
import { Container, CourseName, IconContainer, FlexContainer, ParentName } from './styles';
import httpCommon from '../../services/http-common';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

export default function CourseItem({group}) {
    const [parentIds, setParentIds] = useState([]);
    const activeCourse = group.active;
    const joinable = group.joinable;
    const navigate = useNavigate();

    const getParentGroups = async (parentId) => {
        try { 
            const res = await httpCommon.get(`/group/${parentId}`);            
        } catch (error) {
            console.error('Group get error:', error);
        }
    }   

    useEffect(() => {
        if(group.parentId !== null ){
            if( typeof group.parentId === 'string' ){
                getParentGroups(group.parentId)
            } else {
                setParentIds((prevArray) => [...prevArray, group.parentId])
            }
        }
    },[])

    return(
        <Container onClick={() => {localStorage.setItem('group', JSON.stringify(group)); navigate('/group')}}>
            <FlexContainer>
                <IconContainer green={activeCourse}>
                    <CircleIcon style={{ fontSize: '1.1rem', marginLeft: '.5rem'}} />
                    <p> { activeCourse ? 'קורס פעיל' : 'לא פעיל'} </p>
                </IconContainer>
                {joinable ?
                 <IconContainer green={joinable}>
                    <CircleIcon style={{ fontSize: '1.1rem', marginLeft: '.5rem'}} />
                    <p>הרשמה פתוחה</p>
                </IconContainer> 
                : null }
            </FlexContainer>
            <CourseName>
                קורס  {group.displayName} |
                <span> קורס יסוד </span>
            </CourseName>
            <FlexContainer>
                <ParentName styles={{fontSize: '1rem'}}>{parentIds[0]?.displayName} | </ParentName>
            </FlexContainer>
        </Container>
    )
}