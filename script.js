window.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");

  function updateTime() {
    const currentTime = Date.now(); // current time in ms
    timeElement.textContent = currentTime;
  }

  // Set time immediately when the page loads
  updateTime();

  // Optional: Update every second to keep it fresh
  setInterval(updateTime, 1000);
});
