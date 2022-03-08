import React from "react";
import NavBarContainer from "./NavBarContainer";
import RouterContainer from "./RouterContainer";
import SocialMediaContainer from "./SocialMediaContainer";
import { BrowserRouter } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarContainer />
        <RouterContainer />
        <SocialMediaContainer  />
      </BrowserRouter>
    </div>
  );
};

export default MainContainer;
