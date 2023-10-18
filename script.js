let string = "";
const display = document.getElementById("display");

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "equals") {
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        display.value = "Error";
      }
    } else if (e.target.id === "clear") {
      string = "";
      display.value = string;
    } else {
      string = string + e.target.innerHTML;
      display.value = string;
    }
  });
  let inverse = document.querySelector(".inverse");
  inverse.addEventListener("click", () => {
    // Get the current value from the display
    let currentValue = parseFloat(display.value);

    // Check if the value is not 0 to avoid division by zero
    if (currentValue !== 0) {
      // Calculate the inverse and update the display
      let inverseValue = 1 / currentValue;
      display.value = inverseValue * 10;
    } else {
      alert("Cannot calculate the inverse of 0.");
    }
  });
});
