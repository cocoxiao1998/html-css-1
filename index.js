const NAV = document.querySelectorAll("nav a")
var size = window.matchMedia("(max-width: 899px)")

function reveal(size) {
    if (size.matches) { 
        for (var i = 0; i < NAV.length; i++) {
            NAV[i].classList.add("hide")
        }
    } else {
        for (var i = 0; i < NAV.length; i++) {
            NAV[i].classList.remove("hide")
        }
    }
}
  
//reveal(size) // call listener function at run time
size.addListener(reveal) // attach listener function on state changes


