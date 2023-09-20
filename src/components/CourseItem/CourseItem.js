import React, { useEffect, useState } from 'react';
import { Container, CourseName, IconContainer } from './styles';
import httpCommon from '../../services/http-common';
import CircleIcon from '@mui/icons-material/Circle';

export default function CourseItem({group}) {
    const [parentIds, setParentIds] = useState([]);
    const [activeCourse, setActiveCourse] = useState(group.active)

    const getParentGroups = async (parentId) => {
        try {
            const res = await httpCommon.get(`/group/${parentId}`);
            console.log(res.data)
            
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
        <Container>
            <CourseName>
            <IconContainer>
                <CircleIcon style={{color: activeCourse ? '#72bf6b' : 'rgb(215,215,215)', fontSize: '1.3rem', marginLeft: '.5rem'}} />
                <p>קורס פעיל</p>
            </IconContainer>
                קורס  {group.displayName} |
                <span> קורס יסוד </span>
            </CourseName>
        </Container>
    )
}