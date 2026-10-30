"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let pressCount = 0;

input.addEventListener("keydown", (event) => {
  // Дополнительное задание: Escape очищает поле
  if (event.key === "Escape") {
    input.value = "";
    keyState.textContent = "Поле очищено";
    return;
  }

  lastKey.textContent = event.key;
  keyCode.textContent = event.code;
  keyState.textContent = "Клавиша нажата";

  if (!event.repeat) {
    pressCount += 1;
    keyCount.textContent = pressCount;
  }
});

input.addEventListener("keyup", () => {
  keyState.textContent = "Клавиша отпущена";
});

input.addEventListener("keypress", (event) => {
  console.log("keypress:", event.key);
});