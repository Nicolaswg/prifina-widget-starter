import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  const { ouraData, userData } = props;
  let img = userData.picture;
  let userName = userData.name
  console.log(userName)
  img = {...img}
  userName = {...userName}

  const NavContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: blue;

    .userPicture {
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 50%;
      display:flex;
      justify-content: center;
      align-items: center;
      
      img {
        width: 90%;
        height: 90%;
        border-radius: 50%;
      }
    }

    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p{
        text-align: right;
      }
    }
  `;


  return (
    <NavContainer>
      <div className="userPicture">
        <img src={img['large']}></img>
      </div>
      <div className="userInfo">
        <p>{ouraData.date}</p>
        <p>{userName.first} {userName.last}</p>
        <small>{userData.email}</small>
      </div>
    </NavContainer>
  );
};

export default Navbar;
