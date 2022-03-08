import React from "react";
import { Link, useLocation } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const NavBarContainer = () => {
  const currentPath = useLocation().pathname;

  return (
    <SideNav
      className=""
      style={{ position: "fixed" }}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={currentPath}>
        <NavItem eventKey="/">
          <NavIcon>
            <Link className="nav-text" to="/">
              <i className="fa fa-fw fa-home nav-icon" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link className="nav-text" to="/">Home</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="/festivals">
          <NavIcon>
            <i
              className="fa fal fa-theater-masks nav-icon"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText className="nav-text">Festivals</NavText>

          <NavItem eventKey="/festivals/jazz">
            <NavText>
              <Link to="/festivals/jazz">Jazz</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="/festivals/book">
            <NavText>
              <Link to="/festivals/book">Book</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="/festivals/art">
            <NavText>
              <Link to="/festivals/art">Art</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="/festivals/international">
            <NavText>
              <Link to="/festivals/international">International</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="/festivals/storytelling">
            <NavText>
              <Link to="/festivals/storytelling">Storytelling</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="/festivals/imaginate">
            <NavText>
              <Link to="/festivals/imaginate">Imaginate</Link>
            </NavText>
          </NavItem>

        </NavItem>

        <NavItem eventKey="/favourites">
          <NavIcon>
            <Link to="/favourites">
              <i className="fa far fa-heart nav-icon" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/favourites">Favourites</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="/calendar">
          <NavIcon>
            <Link to="/calendar">
              <i
                className="fa fal fa-calendar-alt nav-icon"
                style={{ fontSize: "1.75em" }}
              />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/calendar">Calendar</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="form">
          <NavIcon>
            <Link to="/form">
              <i className="fa far fa-sign-in nav-icon" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/form">Login</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <Link to="/about">
              <i className="fa fal fa-smile nav-icon" style={{ fontSize: "1.75em" }} />
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
