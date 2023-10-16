import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { StyledCell, HeaderRow, MermbersToggle, ColumnsDiv } from "./styles";
import CheckBox from "../CheckBox/CheckBox";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { grey } from '@mui/material/colors';

export default function MembersTable({ members }) {
  const [membersToShow, setMembersToShow] = useState("mine");
  const [showColumnFilter, setShowColumnFilter] = useState(false);
  const [columnFilterData, setColumnFilterData] = useState({
    questions: [
      { title: "שם מלא", value: true, use: "fullName" },
      { title: "מספר אישי", value: true, use: "phoneNumber" },
      { title: "ציון ממוצע", value: true, use: "" },
      { title: "תעודת זהות", value: false, use: "idNumber" },
      { title: "מספר משובים", value: true, use: "" },
      { title: "מספר טלפון", value: false, use: "phoneNumber" },
      { title: "כתובת", value: false, use: "homeAddress" },
      { title: "התראות", value: true, use: "status" },
      { title: "מספר חירום", value: false, use: "" },
    ],
  });

  const filterColumnsHandler = () => {
    setShowColumnFilter(!showColumnFilter);
  };

  return (
    <TableContainer
      sx={{
        width: "fit-content",
        margin: "0 auto",
        direction: "rtl",
        marginTop: "-13rem",
        borderRadius: "1rem",
        display: "block",
      }}
      component={Paper}
    >
      <Table
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TableHead sx={{
          position: 'relative'
        }}>
          <HeaderRow
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <StyledCell styles={{ display: "flex" }}>
              <MermbersToggle selected={true}>החניכים שלי</MermbersToggle>
              <MermbersToggle selected={false}>כל החניכים</MermbersToggle>
            </StyledCell>
            <StyledCell></StyledCell>
            <StyledCell></StyledCell>
            <StyledCell>חיפוש</StyledCell>
            <StyledCell onClick={filterColumnsHandler}>
              <ColumnsDiv
                clicked={showColumnFilter}
              >
                <ViewColumnIcon
                  style={{
                    position: "relative",
                    left: "1.5rem",
                    top: "0.5rem",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    left: "1rem",
                  }}
                >
                  עמודות
                </span>
                <KeyboardArrowDownIcon
                  style={{
                    position: "relative",
                    right: "1.5rem",
                    top: "0.5rem",
                  }}
                />
              </ColumnsDiv>
            </StyledCell>
          </HeaderRow>
          {showColumnFilter && (
            <CheckBox
              data={columnFilterData}
              setData={setColumnFilterData}
            ></CheckBox>
          )}
        </TableHead>
        <TableBody>
          <TableRow>
            {columnFilterData.questions.map((column) => {
              if (column.value) {
                return <StyledCell type="title">{column.title}</StyledCell>;
              }
            })}
          </TableRow>
          {members.map((member) => {
            return (
              <TableRow>
                {columnFilterData.questions.map((column) => {
                  if (column.value && column.use != null) {
                    return (
                      <StyledCell type="row">{member[column.use]}</StyledCell>
                    );
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
