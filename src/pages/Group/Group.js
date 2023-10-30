import React, { useEffect, useState } from "react";
import {
  Header,
  Container,
  Logo,
  CourseName,
  CourseTime,
  FlexContainer,
  CourseSignUpButton,
  CourseInfo,
  CourseNumbers,
} from "./styles";
import httpCommon from "../../services/http-common";
import InfoIcon from "@mui/icons-material/Info";
import CourseNav from "../../components/CourseNav/CourseNav";
import MembersTable from "../../components/Templates/MembersTable/MembersTable";
import { grey } from "@mui/material/colors";

export function Group() {
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState(JSON.parse(localStorage.getItem("group")));
  const [admin, setAdmin] = useState(null);
  const [available, setAvailable] = useState(null);

  const [bigScreenText, setBigScreenText] = useState(null);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))["_id"];

    //defining admin state
    const adminsArr = JSON.parse(localStorage.getItem("group")).admin;
    if(!adminsArr || !adminsArr.includes(userId)){
          setAdmin(false);
    }

    //checking if user is already pending
    const pendingArr = group.pending.map((obj) => {
      if (obj["_id"]) {
        return obj["_id"];
      }
      return obj;
    });
    const alreadyPending = pendingArr.includes(userId);

    //checking if group is available for pending
    const joinable = JSON.parse(localStorage.getItem("group")).joinable;

    // setAvailable(true);
    setAvailable(joinable && !alreadyPending);
    if(joinable){
      setBigScreenText(alreadyPending ? "הרשמתך למחזור ב נקלטה במערכת ונשלחה למפקדי הקורס": "אינך רשום לקורס, הרשם על מנת לראות את התכנים בעמוד");
    } else {
      setBigScreenText('הקורס לא פתוח לרישום');
    }
  }, []);

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

  const CourseSignUpHandler = async () => {
    //get user and group id
    const userId = JSON.parse(localStorage.getItem("user"))["_id"];
    const groupId = JSON.parse(localStorage.getItem("group"))["_id"];

    try {
      //add user id to the group pending array
      const res = await httpCommon.patch(`/group/addPending/${groupId}`, {
        userId,
      });

      localStorage.setItem("group", JSON.stringify(res.data));
      setGroup(res.data);
      setAvailable(false);
        setBigScreenText("הרשמתך למחזור ב נקלטה במערכת ונשלחה למפקדי הקורס");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      {admin && (
        <Container>
          <Header>
            <Logo>NASSA</Logo>
            <FlexContainer>
              <CourseName>{group.displayName}</CourseName>
              <CourseTime>
                {formatDate(group.end)} - {formatDate(group.start)}
              </CourseTime>
              <InfoIcon style={{ color: "white", fontSize: "1.1rem" }} />
            </FlexContainer>
            <CourseNav page={page} setPage={setPage} />
          </Header>
          <MembersTable members={group.members} />
        </Container>
      )}

      {!admin && (
        <Container>
          {console.log(group)}
          <Header>
            <Logo>NASSA</Logo>
            <FlexContainer>
              <CourseName>{group.displayName}</CourseName>
              <CourseSignUpButton
                disabled={!available}
                onClick={CourseSignUpHandler}
                available={available}
              >
                {available ? "הרשמה" : "בהמתנה"}
              </CourseSignUpButton>
            </FlexContainer>
            <CourseInfo>
              קורס oliver הוא קורס חשוב מאוד שמכשיר אנשים חשובים מאוד שיעשו
              תפקידים חשובים מאוד
            </CourseInfo>
            <CourseNumbers>
              <div>
                <a style={{ fontWeight: "bold" }}>2</a> מחזורים
              </div>
              <div>
                <a style={{ fontWeight: "bold" }}>24</a> רשומים
              </div>
              <div>
                <a style={{ fontWeight: "bold" }}>1</a> מחזורים פתוחים להרשמה
              </div>
            </CourseNumbers>
          </Header>
          <div
            style={{
              color: grey[300],
              margin: "auto",
              position: "relative",
              bottom: "20vh",
              fontSize: "2rem",
            }}
          >
            {bigScreenText}
          </div>
        </Container>
      )}
    </div>
  );
}
