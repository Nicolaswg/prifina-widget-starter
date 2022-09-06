import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  const { score, rest, non_wear, cal_total } = props;

  const hoursConverter = (min) => {
    return min / 60;
  }
  const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-grow: 1;
    position: relative;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;

      .dta_text {
        color: gray;
      }

      .dta {
        display: flex;
        flex-direction: row;
        column-gap: 2px;
        font-weight: bold;
        p {
          text-align: center;
          font-size: 0.9rem;
          flex-grow: 1;
        }

        small {
          text-align: center;
          font-size: 0.6rem;
          flex-grow: 1;
        }
      }
    }
  `;
  return (
    <>
      <FooterWrapper>
        <div>
          <div className="dta">
            <p>{score}</p>
            <small>unit</small>
          </div>
          <small className="dta_text">score</small>
        </div>
        <div>
          <div className="dta">
            <p>{hoursConverter(rest)}</p>
            <small>hrs</small>
          </div>
          <small className="dta_text">rest</small>
        </div>
        <div>
          <div className="dta">
            <p>{hoursConverter(rest)}</p>
            <small>hrs</small>
          </div>
          <small className="dta_text">non wear</small>
        </div>
        <div>
          <div className="dta">
            <p>{cal_total}</p>
            <small>cal</small>
          </div>
          <small className="dta_text">calories</small>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
