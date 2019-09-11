import React from "react";
import PropTypes from "prop-types";

const Scoreboard = ({ matches, attempts }) => {
  return (
    <div>
      <h2>Matches: {matches}</h2>
      <h2>Tries: {attempts}</h2>
    </div>
  );
};

export default Scoreboard;

Scoreboard.propTypes = {
  matches: PropTypes.number.isRequired,
  attempts: PropTypes.number.isRequired
};
