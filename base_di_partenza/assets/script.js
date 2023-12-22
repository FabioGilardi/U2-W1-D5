window.onscroll = function () {
  const greenCircle = document.getElementById("circle");
  const header = document.getElementsByTagName("header")[0]; // Replace 'myHeader' with your header's ID
  if (window.scrollY > 400) {
    greenCircle.style.backgroundColor = "#1a8917";
    header.classList.add("scrolled"); // Add a class name for scrolled state
  } else {
    greenCircle.style.backgroundColor = "#191919";
    header.classList.remove("scrolled"); // Remove the class when not scrolled
  }
};
