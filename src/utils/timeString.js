function timeString(ticks) {
  const numMinutes = Math.floor(ticks / 60);
  const numSeconds = ticks % 60;
  let timeString = "";

  if (numMinutes < 10) {
    timeString += `0${numMinutes}:`;
  } else {
    timeString += `${numMinutes}:`;
  }

  if (numSeconds < 10) {
    timeString += `0${numSeconds}`;
  } else {
    timeString += `${numSeconds}`;
  }
  return timeString;
}

export default timeString;
