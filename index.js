let isLightMode = true;
function main() {
  document.body.style.backgroundColor = isLightMode ? "white" : "black";
  document.getElementById("footer").style.background = isLightMode
    ? "#f7f7f7"
    : "#373B49";
  document.body.style.color = isLightMode ? "black" : "white";
  document.getElementById("bravo").style.color = isLightMode
    ? "black"
    : "white";
  document.getElementById("icon").innerHTML = isLightMode
    ? "<img src='./images/Vector.png' alt='sun' width='14px' />"
    : "<img src='./images/moon.png' alt='moon' width='14px' />";
}

function toggle() {
  isLightMode = !isLightMode;
  main();
}
