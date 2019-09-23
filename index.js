const NAV_A = document.querySelectorAll("nav a")
const NAV_A_LENGTH = 4
const NAV_BAR = document.querySelector(".nav-bar")
const DROP_DOWN_CONTENT = document.querySelectorAll(".drop-down-content a")
var size = window.matchMedia("(max-width: 899px)")

function drop_down() {
    for (var i = 0; i < DROP_DOWN_CONTENT.length; i++) {
        DROP_DOWN_CONTENT[i].classList.toggle("hide")
    }
}

function reveal(size) {
    if (size.matches) { 
        for (var i = 0; i < NAV_A_LENGTH; i++) {
            NAV_A[i].classList.add("hide")
        }

        NAV_BAR.classList.remove("hide")
    } else {
        for (var i = 0; i < NAV_A_LENGTH; i++) {
            NAV_A[i].classList.remove("hide")
        }

        NAV_BAR.classList.add("hide")
    }
}

drop_down()
reveal(size) // call listener function at run time
size.addListener(reveal) // attach listener function on state changes
  


