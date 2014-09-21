
var winData = new ReactiveDict();

var updateWindowSize = function () {
  winData.set("width", window.innerWidth);
  winData.set("height", window.innerHeight);
};
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

windowSize = function () {
  return {
    width: winData.get("width"),
    height: winData.get("height")
  };
};
