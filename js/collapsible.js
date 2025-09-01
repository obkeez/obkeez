// collapsible.js

document.addEventListener("DOMContentLoaded", () => {
  const allDetails = document.querySelectorAll("details");

  allDetails.forEach(detail => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        // Close others
        allDetails.forEach(other => {
          if (other !== detail && other.open) {
            other.open = false;
          }
        }
      }
    });
  });
});
