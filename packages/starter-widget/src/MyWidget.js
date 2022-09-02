import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import {ActivitySummary} from "@dynamic-data/oura-data/mockups"
import { Container } from "./components/Container";
import Navbar from "./components/Navbar/Navbar";


// unique appID for the app....
const appID = "1u3f465t4cNSWYiyKFVwBG";
const ouraData = {...ActivitySummary}
console.log(ouraData)

const MyWidget = () => {
  // init hook and get provider api services...
  const [user, setUser] = useState({})

  const requestRandomUser = async () => {
    const request = await fetch('https://randomuser.me/api/');
    const data = await request.json()
    setUser(data.results[0])
  }

  useEffect(() => {
    requestRandomUser()
  }, [])
const Wrapper = styled.section`
  padding: 0.5rem 0.2rem;
  border-radius: 5px;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
  return (
    <Container variant="small" style={{ border: "1px solid blue" }}>
      <Wrapper>
      <Navbar ouraData={{
          icon: '',
          userName: 'Nicolas',
          date: ouraData.summary_date,
        }} userData={user}/>
      </Wrapper>
    </Container>
  );
};

export default MyWidget;
