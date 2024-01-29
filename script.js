let countdown = (num, callback) => {
  if (num > 0) {
    document.getElementById("countdownContainer").innerText = num;
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

document.getElementById("startButton").addEventListener("click", () => {
  countdown(10, () => {
    document.getElementById("countdownContainer").innerText =
      "Happy Independence Day !";
  });
});
