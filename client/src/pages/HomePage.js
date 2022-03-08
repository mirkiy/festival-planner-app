import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Edinfest planner</h1>
      <section className="main-page-gallery">
        <div className="event-wrapper">
          <img
            class="rounded shadow"
            width="320px"
            height="180px"
            src="../static/images/art.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
