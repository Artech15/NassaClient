import React, { useEffect, useState } from 'react';
import { Container, StyledTop, FlexContainer, Title, Text, StyledInput, StyledBottom, CourseContainer,MyCoursesTitle } from './styles';
import httpCommon from '../../services/http-common';
import { useMainContext } from '../../context/useContext';
export default function Home() {
    const { user } = useMainContext();
    const [group, setGroup] = useState()

    const getUserCourse = async () => {
        try {
            const res = await httpCommon.get(`/user/${user}`);
            console.log(res)
            
        } catch (error) {
            console.error('Group get error:', error);
        }
    }

    useEffect(() => {
        getUserCourse();
    }, [])

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
                </CourseContainer>
            </StyledBottom>
        </Container>
    )
}