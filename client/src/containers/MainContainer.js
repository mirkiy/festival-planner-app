import React from "react";
import NavBarContainer from "./NavBarContainer";
import RouterContainer from "./RouterContainer";
import SocialMediaContainer from "./SocialMediaContainer";
import { BrowserRouter } from "react-router-dom";

const MainContainer = () => {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <BrowserRouter>
                <NavBarContainer />
                <SocialMediaContainer />
                <RouterContainer />
            </BrowserRouter>
        </div>
    );
};

export default MainContainer;
