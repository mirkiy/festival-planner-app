import React from "react";
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const NavBarContainer = () => {
  return (
    <SideNav
      style={{ position: "initial" }}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <Link to="/">
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/">Home</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="festivals">
          <NavIcon>
            <i
              className="fa fal fa-theater-masks"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Festivals</NavText>
          <NavItem eventKey="festivals/jazz">
            <NavText>
              <Link to="/festivals">Jazz</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="festivals/book">
            <NavText>
              <Link to="/festivals">Book</Link>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="favourites">
          <NavIcon>
            <Link to="/favourites">
              <i className="fa far fa-heart" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/favourites">Favourites</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="calendar">
          <NavIcon>
            <Link to="/calendar">
              <i
                className="fa fal fa-calendar-alt"
                style={{ fontSize: "1.75em" }}
              />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/calendar">Calendar</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="login">
          <NavIcon>
            <Link to="/form">
              <i className="fa far fa-sign-in" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/form">Login</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <Link to="/about">
              <i className="fa fal fa-smile" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/about">About</Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default NavBarContainer;
