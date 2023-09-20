import React, { useEffect, useState } from 'react';
import { Container, StyledTop, FlexContainer, Title, Text, StyledInput, StyledBottom, CourseContainer,MyCoursesTitle, GroupsContainer } from './styles';
import httpCommon from '../../services/http-common';
import CourseItem from '../../components/CourseItem/CourseItem';
export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [groups, setGroups] = useState([])

    const getUserCourse = async (groupId) => {
        try {
            const res = await httpCommon.get(`/group/${groupId}`);
            // setGroups((prevGroup) => [...prevGroup, res.data]);
            if(res.data.type === 'course'){
                return res.data
            }
            return null
            
        } catch (error) {
            console.error('Group get error:', error);
        }
    }

  useEffect(() => {
    // Map user.groups to an array of promises
    const promiseGroups = user.groups.map(group => getUserCourse(group));

    // Use Promise.all to wait for all promises to resolve
    Promise.all(promiseGroups)
      .then(dataArray => {
        setGroups([dataArray[0]]);
      })
      .catch(error => {
        console.error('Error fetching groups:', error);
      });
  }, []);

    return(
        <Container>
            <StyledTop>
                <FlexContainer>
                    <Title>NASSA</Title>
                    <Text>מערכת לניהול קורסים ותיקי חניכים</Text>
                    <StyledInput />
                </FlexContainer>
            </StyledTop>
            <StyledBottom>
                <CourseContainer>
                    <MyCoursesTitle>הקורסים שלי</MyCoursesTitle>
                    <GroupsContainer>
                        {groups.map(group => {
                            return group !== null ? <CourseItem group={group}/> : null
                        })}
                    </GroupsContainer>
                </CourseContainer>
            </StyledBottom>
        </Container>
    )
}