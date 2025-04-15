document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");

    window.appendToDisplay = function(value) {
        display.value += value;
    };

    window.clearDisplay = function() {
        display.value = "";
    };

    window.calculateResult = function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };
});
