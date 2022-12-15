const aSussy = document.querySelectorAll(".a-sussy");
const imgSmileSussy = document.querySelector("#smile-sussy");

aSussy.forEach((a) => {
  a.addEventListener("mouseover", () => {
    imgSmileSussy.style.opacity = "1";
  });
});

aSussy.forEach((a) => {
  a.addEventListener("mouseleave", () => {
    imgSmileSussy.style.opacity = "0";
  });
});
