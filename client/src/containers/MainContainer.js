import React from "react";
import NavBarContainer from "./NavBarContainer";
import RouterContainer from "./RouterContainer";
import SocialMediaContainer from "./SocialMediaContainer";
import { BrowserRouter } from "react-router-dom";

const MainContainer = () => {
    return (
        <>
            <div>MainContainer</div>
            <BrowserRouter>
                <NavBarContainer />
                <SocialMediaContainer />
                <RouterContainer />
            </BrowserRouter>
        </>
    );
};

export default MainContainer;
