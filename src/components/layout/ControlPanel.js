import React, { useContext } from "react";
import GameContext from "../../context/gameContext";

const ControlPanel = props => {
  const gameContext = useContext(GameContext);
  const { gameName } = gameContext;

  return <div className="control-panel">{props.children}</div>;
};

export default ControlPanel;
