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
      <section className="home-page-gallery">
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={ArtImage}
          />
        </div>
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={BookImage}
          />
        </div>
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={ImaginationImage}
          />
        </div>
      </section>
      <h1>Edinfest planner</h1>
      <section className="home-page-gallery">
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={JazzImage}
          />
        </div>
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={StorytellingImage}
          />
        </div>
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src={InternationalImage}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
