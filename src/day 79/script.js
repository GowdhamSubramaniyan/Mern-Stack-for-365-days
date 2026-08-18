const scores = [80, 92, 75, 88, 95];

// while loop
let total = 0;
let i = 0;

while (i < scores.length) {
  total += scores[i];
  i++;
}

// for...of loop
let passed = 0;

for (const score of scores) {
  if (score >= 80) {
    passed++;
  }
}

// Calculate average
const average = total / scores.length;

// Show results
document.getElementById("scores").textContent =
  `Scores: ${scores.join(", ")}`;

document.getElementById("average").textContent =
  `Average: ${average}`;

document.getElementById("passed").textContent =
  `Passed: ${passed}`;

// Final summary
document.getElementById("summary").textContent =
  `Summary: ${passed} of ${scores.length} scores were 80 or higher.`; 
