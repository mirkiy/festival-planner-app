import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
    ClickOutside,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const NavBarContainer = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
                    </NavIcon>
                    <NavText>
                        <Link to="/">Home</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="festivals">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
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
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
                    </NavIcon>
                    <NavText>
                        <Link to="/favourites">Favourites</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="calendar">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
                    </NavIcon>
                    <NavText>
                        <Link to="/calendar">Calendar</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="login">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
                    </NavIcon>
                    <NavText>
                        <Link to="/form">Login</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="about">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                        />
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
