window.onscroll = function () {
  const greenCircle = document.getElementById("circle");
  const header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 400) {
    greenCircle.style.backgroundColor = "#1a8917";
    header.classList.add("scrolled");
  } else {
    greenCircle.style.backgroundColor = "#191919";
    header.classList.remove("scrolled");
  }
};
