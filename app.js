// app.js

document.addEventListener("DOMContentLoaded", () => {
  const guessedInput = document.getElementById("guessed_input");
  const form = document.querySelector("form");
  const attempts = document.createElement("p");
  const result = document.createElement("p"); // new result paragraph element
  let randomNumber = Math.floor(Math.random() * 101);
  let attemptCount = 0;

  // Append attempts and result paragraphs to the body
  document.querySelector(".gameplay").appendChild(attempts);
  document.querySelector(".gameplay").appendChild(result);
  attempts.textContent = "Attempts: " + attemptCount;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userGuess = Number(guessedInput.value);
    attemptCount++;

    if (userGuess === randomNumber) {
      if (attemptCount <= 4) {
        result.textContent =
          "Great! You've guessed the number correctly in " +
          attemptCount +
          " attempts.";
      } else if (attemptCount <= 10) {
        result.textContent =
          "Well done! You've guessed the number correctly in " +
          attemptCount +
          " attempts.";
      } else {
        result.textContent = "Nice, you guessed it!";
      }
      alert(
        `Congratulations! You've guessed the number ${randomNumber} correctly in ${attemptCount} attempts.`
      );
      // Reset game
      randomNumber = Math.floor(Math.random() * 101);
      attemptCount = 0;
      guessedInput.value = "";
    } else if (userGuess < randomNumber) {
      alert("You have entered a low number, please enter a higher number");
    } else {
      alert("You have entered a high number, please enter a lower number");
    }

    attempts.textContent = `Attempts: ${attemptCount}`;
    guessedInput.value = "";
    guessedInput.focus();
  });
});
