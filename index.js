const NAV_A = document.querySelectorAll("nav a")
const NAV_BAR = document.querySelector(".nav-bar")
var size = window.matchMedia("(max-width: 899px)")

function reveal(size) {
    if (size.matches) { 
        for (var i = 0; i < NAV_A.length; i++) {
            NAV_A[i].classList.add("hide")
        }
        NAV_BAR.classList.remove("hide")
    } else {
        for (var i = 0; i < NAV_A.length; i++) {
            NAV_A[i].classList.remove("hide")
        }
        NAV_BAR.classList.add("hide")
    }
}
  
reveal(size) // call listener function at run time
size.addListener(reveal) // attach listener function on state changes


