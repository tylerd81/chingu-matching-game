import React from "react";
import PropTypes from "prop-types";

const Scoreboard = ({ matches, attempts }) => {
  return (
    <div className="score-board-container">
      <h2 className="sb-matches">Matches: {matches}</h2>
      <h2 className="sb-tries">Tries: {attempts}</h2>
    </div>
  );
};

export default Scoreboard;

Scoreboard.propTypes = {
  matches: PropTypes.number.isRequired,
  attempts: PropTypes.number.isRequired
};
