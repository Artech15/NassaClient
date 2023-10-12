import React, {useState} from 'react';
import { Header, Container, Logo, CourseName, CourseTime, FlexContainer } from './styles';
import InfoIcon from '@mui/icons-material/Info';
import CourseNav from '../../components/CourseNav/CourseNav';
import MembersTable from '../../components/Templates/MembersTable/MembersTable';

export function Group () {
    const [page, setPage] = useState(1);
    const group = JSON.parse(localStorage.getItem('group'));


    function formatDate(inputDate) {
        const date = new Date(inputDate);

        // Get day, month, and year components
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
        const year = date.getFullYear();

        // Construct the formatted date string
        const formattedDate = `${day}.${month}.${year}`;

        return formattedDate;
    }

    return(
        <Container>
            <Header>
                <Logo>NASSA</Logo>
                <FlexContainer>
                    <CourseName>{group.displayName}</CourseName>
                    <CourseTime>{formatDate(group.end)} - {formatDate(group.start)}</CourseTime>
                    <InfoIcon style={{color: 'white', fontSize: '1.1rem'}} />
                </FlexContainer>
                <CourseNav page={page} setPage={setPage}/>
            </Header>
            <MembersTable members={group.members} />
        </Container>
    )
}