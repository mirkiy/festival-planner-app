import React from "react";

const FilteredEvents = ({ setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search-body">
      {/* Source: https://freefrontend.com/css-search-boxes/ */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          name="search"
          onChange={handleChange}
          placeholder="Search for your event ..."
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};

export default FilteredEvents;
