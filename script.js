// script.js

document.addEventListener("DOMContentLoaded", () => {
  const loadingText = document.getElementById("loading-text");
  const dashboardFrame = document.getElementById("dashboard-frame");

  let messages = [
    "Simple.",
    "Faster.",
    "Transparent.",
    "Timeless Trading...",
    "Initializing..."
  ];

  let index = 0;

  function showNextMessage() {
    if (index < messages.length) {
      loadingText.innerText = messages[index];
      index++;
      setTimeout(showNextMessage, 1000);
    } else {
      // After messages, show the dashboard
      document.getElementById("loader").style.display = "none";
      dashboardFrame.style.display = "block";
    }
  }

  showNextMessage();
});
