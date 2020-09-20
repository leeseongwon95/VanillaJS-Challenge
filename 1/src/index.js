// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const title = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
    handleMouseOver: function () {
        title.innerText = "mouse over!";
        title.style.color = colors[1];
    },
    handleMouseOut: function () {
        title.innerText = "mouse out!";
        title.style.color = colors[2];
    },
    handleResize: function () {
        title.innerText = "resize!";
        title.style.color = colors[3];
    },
    handleRightClick: function () {
        title.innerText = "rightClick!";
        title.style.color = colors[4];
    },
};

function init() {
    title.addEventListener("mouseover", superEventHandler.handleMouseOver);
    title.addEventListener("mouseout", superEventHandler.handleMouseOut);
    window.addEventListener("resize", superEventHandler.handleResize);
    window.addEventListener("contextmenu", superEventHandler.handleRightClick);
}

init();
