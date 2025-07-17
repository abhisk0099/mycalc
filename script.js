function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    alert("Invalid Expression");
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light");
  body.classList.toggle("dark");
}
