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
  const [favouritesData, setFavouritesData] = useState([]);


  const fetchData = () => {
    fetch("http://localhost:8080/festivals")
      .then((response) => response.json())
      .then((data) => setFestivalData(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchData()
  }, []);


  const onEventClick = (newFavourite) => {
    if (favouritesData.includes(newFavourite)) {
      setFavouritesData(favouritesData => favouritesData.filter(favourite => favourite !== newFavourite))
    } else {
      setFavouritesData(favouritesData => [...favouritesData, newFavourite])
    }
  }

  return (
    <>
      <main style={{ paddingBottom: "8vh", paddingLeft: "6vw" }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/calendar" element={
            <FestivalDataContext.Provider value={{ festivalData, setFestivalData }}>
              <CalendarPage />
            </FestivalDataContext.Provider>
          }
          />
          <Route path="/favourites" element={
            <FestivalDataContext.Provider value={{ festivalData, setFestivalData }}>
              <FavouritesDataContext.Provider value={{ favouritesData, setFavouritesData }}>
                <FavouritesPage onEventClick={onEventClick} />
              </FavouritesDataContext.Provider>
            </FestivalDataContext.Provider>
          }
          />
          <Route path="/festivals" element={
            <FestivalDataContext.Provider value={{ festivalData, setFestivalData }}>
              <FavouritesDataContext.Provider value={{ favouritesData, setFavouritesData }}>
                <FestivalPage onEventClick={onEventClick} />
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
