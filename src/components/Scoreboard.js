import React from "react";
import PropTypes from "prop-types";

const Scoreboard = ({ matches, attempts }) => {
  return (
    <div className="score-board-container">
      <div className="score-item">
        <h2>Matches</h2>
        <h2 className="sb-matches">{matches}</h2>
      </div>

      <div className="score-item">
        <h2>Attempts:</h2>
        <h2 className="sb-tries">{attempts}</h2>
      </div>
    </div>
  );
};

export default Scoreboard;

Scoreboard.propTypes = {
  matches: PropTypes.number.isRequired,
  attempts: PropTypes.number.isRequired
};
