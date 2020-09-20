import "./styles.css";
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const text = document.querySelector("h1");
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h4");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const now = new Date();
    const gap = xmasDay - now;
    let d = Math.floor(gap / (1000 * 60 * 60 * 24));
    let h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((gap % (1000 * 60)) / 1000);
    if (gap <= 0) {
        text.innerText = `After Chrismas time`;
        d = -d;
        h = -h;
        m = -m;
        s = -s;
        clockTitle.innerText = `${d < 10 ? `0${d}` : d}d ${
            h < 10 ? `0${h}` : h
        }h ${m < 10 ? `0${m}` : m}m ${s < 10 ? `0${s}` : s}s`;
    } else {
        clockTitle.innerText = `${d < 10 ? `0${d}` : d}d ${
            h < 10 ? `0${h}` : h
        }h ${m < 10 ? `0${m}` : m}m ${s < 10 ? `0${s}` : s}s`;
    }
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
