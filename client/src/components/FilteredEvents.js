import React from "react";

const FilteredEvents = ({ setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for your event ..."
      />
    </>
  );
};

export default FilteredEvents;
