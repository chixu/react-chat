export function getShortName(str) {
  // return str.substr(0, 1).toUpperCase();
  return str.substr(0, 1);
}

export function getShortChat(str) {
  return str.length > 20 ? str.substr(0, 20) + "..." : str;
}

export function randomColor() {

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var h = randomInt(0, 360);
  var s = randomInt(70, 95);
  var l = randomInt(30, 70);
  return `hsl(${h},${s}%,${l}%)`;
};