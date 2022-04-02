import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CalendarPage from "../pages/CalendarPage";
import FavouritesPage from "../pages/FavouritesPage";
import FestivalPage from "../pages/FestivalPage";
import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from "../context/FavouritesDataContext";

const RouterContainer = () => {
  const [festivalData, setFestivalData] = useState([]);
  const [favouritesData, setFavouritesData] = useState(() => {
    const storage = localStorage.getItem("favourites");
    const parsedStorage = JSON.parse(storage);
    return parsedStorage || [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouritesData))
  }, [favouritesData])

  const onEventClick = (newFavourite) => {
    const favouritesDataCodes = favouritesData.map(
      (favourite) => favourite.code
    );

    if (favouritesDataCodes.includes(newFavourite.code)) {
      setFavouritesData((favouritesData) =>
        favouritesData.filter(
          (favourite) => favourite.code !== newFavourite.code
        )
      );
    } else {
      setFavouritesData((favouritesData) => [...favouritesData, newFavourite]);
    }
  };

  return (
    <>
      <main style={{ paddingBottom: "8vh", paddingLeft: "8vw", flexGrow: "1", minHeight: "100%"}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/calendar"
            element={
              <FavouritesDataContext.Provider
                value={{ favouritesData, setFavouritesData }}
              >
                <CalendarPage />
              </FavouritesDataContext.Provider>
            }
          />
          <Route
            path="/favourites"
            element={
              <FestivalDataContext.Provider
                value={{ festivalData, setFestivalData }}
              >
                <FavouritesDataContext.Provider
                  value={{ favouritesData, setFavouritesData }}
                >
                  <FavouritesPage onEventClick={onEventClick} />
                </FavouritesDataContext.Provider>
              </FestivalDataContext.Provider>
            }
          />
          <Route
            exact
            path="/festivals/:festival"
            element={
              <FestivalDataContext.Provider
                value={{ festivalData, setFestivalData }}
              >
                <FavouritesDataContext.Provider
                  value={{ favouritesData, setFavouritesData }}
                >
                  <FestivalPage
                    key={window.location.pathname}
                    onEventClick={onEventClick}
                  />
                </FavouritesDataContext.Provider>
              </FestivalDataContext.Provider>
            }
          />

          <Route path="/form" element={<FormPage />} />
        </Routes>
      </main>
    </>
  );
};

export default RouterContainer;
