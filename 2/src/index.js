// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const colors = ["#2F8CD5", "#924EAC", "#EEBC10"];

function resizeEventHandler() {
    const width = window.innerWidth;
    h2.style.color = "white";
    if (width < 478) {
        body.style.backgroundColor = colors[0];
    } else if (width >= 478 && width <= 680) {
        body.style.backgroundColor = colors[1];
    } else if (width > 680) {
        body.style.backgroundColor = colors[2];
    }
}

function init() {
    resizeEventHandler();
    window.addEventListener("resize", resizeEventHandler);
}

init();
