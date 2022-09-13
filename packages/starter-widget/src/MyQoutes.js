import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import OURA from "@prifina/oura-data";
import { Container } from "./components/Container";
import Header from "./components/Header/Header";
import Qoutes from "./components/Qoutes/Qoutes";
import Footer from "./components/Footer/Footer";

// unique appID for the app....
const appID = "5iEHz6gTz8QoyfXydUUgzV";
const {ActivitySummary} = OURA;
const ouraData = { ...ActivitySummary };

const MyQoutes = () => {
  // init hook and get provider api services...

  const [user, setUser] = useState({});
  const {summary_date, score, rest, non_wear, cal_total} = ouraData[0];
  const requestRandomUser = async () => {
    const request = await fetch("https://randomuser.me/api/");
    const data = await request.json();
    setUser(data.results[0]);
  };

  useEffect( async () => {
    requestRandomUser();
  }, []);

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  return (
    <Container variant="small" style={{ border: "0.8px solid #ee5522" }}>
      <Wrapper>
        <Header
          ouraData={{
            date: summary_date,
          }}
          userData={user}
        />
        <Qoutes score={score} rest={rest} />
        <Footer score={score} rest={rest} non_wear={non_wear} cal_total={cal_total}/>
      </Wrapper>
    </Container>
  );
};

export default MyQoutes;
