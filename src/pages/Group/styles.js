import styled from "styled-components";

export const Container = styled.div(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "0",
  left: "0",
  flexFlow: "wrap",
  direction: "rtl",
  color: "white",
}));

export const Header = styled.div(() => ({
  width: "100%",
  height: "15rem",
  backgroundColor: "#4d4c4c",
  padding: "2rem 5rem",
}));

export const Logo = styled.h1(() => ({
  fontSize: "2.5rem",
  color: "white",
  fontWeight: "100",
  marginTop: "0",
  marginRight: ".5rem",
  direction: "rtl",
}));

export const CourseName = styled.h2(() => ({
  color: "white",
  fontSize: "2.5rem",
  fontFamily: "AssistantBold",
  margin: "0",
  marginLeft: "1rem",
}));

export const CourseTime = styled.p(() => ({
  color: "white",
  fontSize: "1rem",
  marginLeft: "1rem",
}));

export const FlexContainer = styled.div(() => ({
  display: "flex",
  alignItems: "baseline",
}));

export const CourseSignUpButton = styled.button((props) => ({
  "&&": {
    backgroundColor: props.available ? "#3e50d6" : "#d1d2de",
    width: "6rem",
    height: "2rem",
    borderRadius: "1rem",
    color: props.available ? "white" : "grey",
    textAlign: "center",
    lineHeight: "2",
    cursor: props.available ? "pointer" : "not-allowed",
    fontWeight: "bold",
    borderColor: "transparent"
  },
  "&:hover": {
    backgroundColor: props.available ? "#3c48a6" : "#d1d2de",
  },
}));

export const CourseInfo = styled.div(() => ({
    width: '29rem',
    margin: '1.5rem 0rem 2.5rem 0rem',
    fontFamily: 'Assistant'
}));

export const CourseNumbers = styled.div(() => ({
    width: "24rem",
    display: "flex",
    justifyContent: "space-between"
  }));
