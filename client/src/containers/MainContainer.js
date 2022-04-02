import React from "react";
import NavBarContainer from "./NavBarContainer";
import RouterContainer from "./RouterContainer";
import SocialMediaContainer from "./SocialMediaContainer";
import { BrowserRouter } from "react-router-dom";

const MainContainer = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <BrowserRouter>
        <NavBarContainer />
        <RouterContainer />
        <SocialMediaContainer  />
      </BrowserRouter>
    </div>
  );
};

export default MainContainer;
