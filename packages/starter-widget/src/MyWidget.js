import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
// import { ActivitySummary } from "@prifina/oura-data/mockups";
import { Container } from "./components/Container";
import Header from "./components/Header/Header";
import Qoutes from "./components/Qoutes/Qoutes";

// unique appID for the app....
const appID = "1u3f465t4cNSWYiyKFVwBG";
const ouraData = { ...ActivitySummary };


const MyWidget = () => {
  // init hook and get provider api services...
  const [user, setUser] = useState({});

  const requestRandomUser = async () => {
    const request = await fetch("https://randomuser.me/api/");
    const data = await request.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    requestRandomUser();
  }, []);
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  return (
    <Container variant="small" style={{ border: "1px solid #ee5522" }}>
      <Wrapper>
        <Header
          ouraData={{
            date: ouraData[0].summary_date,
          }}
          userData={user}
        />
        <Qoutes />
      </Wrapper>
    </Container>
  );
};

export default MyWidget;
