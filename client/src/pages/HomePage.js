import React from "react";
import ArtImage from "../static/images/art.jpg";
import BookImage from "../static/images/book.jpg";
import ImaginationImage from "../static/images/imagination.jpg";
import JazzImage from "../static/images/jazz.jpg";
import StorytellingImage from "../static/images/storytelling.jpg";
import InternationalImage from "../static/images/international.jpg";

const HomePage = () => {
  return (
    <main className="home-page-container">
      <h1>Edinfest planner</h1>
      <section className="home-page-gallery">
        <div className="home-event-wrapper">
          <a href="/festivals/art">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={ArtImage}
            />
            <span>ART</span>
          </a>
        </div>
        <div className="home-event-wrapper">
          <a href="/festivals/book">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={BookImage}
            />
            <span>BOOK</span>
          </a>
        </div>
        <div className="home-event-wrapper">
          <a href="/festivals/imaginate">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={ImaginationImage}
            />
            <span>IMAGINATE</span>
          </a>
        </div>
      </section>
      <section className="home-page-gallery">
        <div className="home-event-wrapper">
          <a href="/festivals/jazz">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={JazzImage}
            />
            <span>JAZZ</span>
          </a>
        </div>
        <div className="home-event-wrapper">
          <a href="/festivals/storytelling">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={StorytellingImage}
            />
            <span>STORYTELLING</span>
          </a>
        </div>
        <div className="home-event-wrapper">
          <a href="/festivals/international">
            <img
              className="rounded shadow"
              width="320px"
              height="180px"
              src={InternationalImage}
            />
            <span>INTERNATIONAL</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
