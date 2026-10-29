const clickButton = document.querySelector("#click-button");
let clickCount = 0;

clickButton.addEventListener("click", function () {
    clickCount += 1;
    clickButton.textContent = `Kliknięcia: ${clickCount}`;
});