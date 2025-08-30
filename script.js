// =========================
// Part 1: JavaScript Basics
// =========================

// Variables & conditionals
function checkAge() {
  let age = prompt("Enter your age:"); // Capture user input
  age = Number(age); // Convert to number

  let message = "";
  if (age >= 18) {
    message = "✅ You are an adult.";
  } else if (age > 0) {
    message = "⚠️ You are a minor.";
  } else {
    message = "❌ Invalid age entered.";
  }

  // Output result to webpage
  document.getElementById("age-output").textContent = message;
  console.log("Age check result:", message);
}

// =========================
// Part 2: Functions
// =========================

// Custom function 1: Calculate sum
function calculateSum(a, b) {
  return a + b;
}

function showSum() {
  let result = calculateSum(10, 20);
  document.getElementById("sum-output").textContent = "10 + 20 = " + result;
}

// Custom function 2: Toggle text content
function toggleContent() {
  const textElement = document.getElementById("toggle-text");
  if (textElement.textContent.includes("toggle")) {
    textElement.textContent = "Text has been toggled!";
  } else {
    textElement.textContent = "Click the button to toggle this text.";
  }
}

// =========================
// Part 3: Loops
// =========================

// While loop: Countdown
let countdownDiv = document.getElementById("countdown");
let count = 5;
while (count >= 0) {
  let p = document.createElement("p");
  p.textContent = count;
  countdownDiv.appendChild(p);
  count--;
}

// For loop: Display fruit list
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
let fruitList = document.getElementById("fruit-list");
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  fruitList.appendChild(li);
}

// =========================
// Part 4: DOM Manipulation
// =========================

// DOM interaction 1: Change background color
// =========================
// Part 4: DOM Manipulation
// =========================

// DOM interaction 1: Change background color with smooth transition + auto slideshow
const colors = ["white", "lightyellow", "lightblue", "lavender", "lightgreen"];
let colorIndex = 0;

function changeBackground() {
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
  document.body.style.backgroundColor = colors[colorIndex];
}

// Button click changes color immediately
document.getElementById("change-color").addEventListener("click", changeBackground);

// Auto slideshow changes color every 3 seconds
setInterval(changeBackground, 3000);


// DOM interaction 2: Add list items dynamically
document.getElementById("add-item").addEventListener("click", () => {
  let ul = document.getElementById("dynamic-list");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

// DOM interaction 3: Console log when text is toggled
document.getElementById("toggle-text").addEventListener("click", () => {
  console.log("Toggle text element was clicked!");
});
