const buttons = document.querySelectorAll(".t");
const input = document.getElementById("input");
const operators = ["+", "-", "*", "/", "%", "."];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "C") {
      input.value = "";
    } else if (value === "X") {
      if (input.value === "Error") {
        input.value = "";
      } else {
        input.value = input.value.slice(0, -1);
      }
    } else if (value === "=") {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }
    } else {
      let lastChar = input.value.slice(-1);
      if (operators.includes(lastChar) && operators.includes(value)) {
        input.value = input.value.slice(0, -1) + value;
      } else {
        input.value += value;
      }
    }
  });
});
