document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value; // Get the input value
  const output = document.getElementById("output"); // Get the output div

  // Ensure the input is a number
  const number = parseFloat(input);
  if (isNaN(number)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  // Start the promise chain
  new Promise((resolve) => {
    setTimeout(() => resolve(number), 2000); // Resolves with the input number after 2 seconds
  })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num * 2), 1000); // Multiplies by 2 and resolves after 1 second
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num - 3), 1000); // Subtracts 3 and resolves after 1 second
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num / 2), 1000); // Divides by 2 and resolves after 1 second
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num + 10), 1000); // Adds 10 and resolves after 1 second
      });
    })
    .then((num) => {
      output.textContent = `Final Result: ${num}`; // Updates the output div with the final result
    })
    .catch((err) => {
      output.textContent = `Error: ${err.message}`; // Handle any potential errors
    });
});
