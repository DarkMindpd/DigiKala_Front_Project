let prevScrollPos = window.pageYOffset;


window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "128px";
  } else {
    document.getElementById("navbar").style.top = "78px";
  }

  prevScrollPos = currentScrollPos;
});