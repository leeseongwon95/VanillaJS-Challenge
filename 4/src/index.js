// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");

const COUNTRY_LS = "country";

function handleChange(event) {
    const currentValue = event.target.value;
    localStorage.setItem(COUNTRY_LS, currentValue);
}

function saveSelcet() {
    select.addEventListener("change", handleChange);
}

function loadCountry() {
    const currentCountry = localStorage.getItem(COUNTRY_LS);
    const selected = document.querySelector(
        `option[value="${currentCountry}"]`
    );
    selected.selected = true;
    saveSelcet();
}

function init() {
    loadCountry();
}

init();
