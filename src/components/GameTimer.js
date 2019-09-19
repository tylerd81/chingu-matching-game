import React, { useEffect, useState } from "react";

const GameTimer = props => {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    console.log("setting");
    setInterval(() => {
      console.log(ticks);
      tick();
    }, 1000);
  }, []);

  const tick = () => setTicks(ticks + 1);
  // const timerTick = () => {
  //   console.log(ticks + 1);
  //   setTicks(ticks + 1);
  // };
  return <div>{ticks}</div>;
};
export default GameTimer;
