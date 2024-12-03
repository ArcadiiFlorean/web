function toggleContent(button) {
  console.log("Button clicked"); // Debugging line to check if the function is triggered
  const content = button.nextElementSibling;
  const computedStyle = window.getComputedStyle(content);
  const isVisible = computedStyle.display === "block"; // Use computed style to check visibility

  // Close all open sections
  document.querySelectorAll(".content").forEach((item) => {
    item.style.display = "none";
  });
  document.querySelectorAll("button span").forEach((span) => {
    span.textContent = "+"; // Reset all spans to "+"
  });

  // Open the clicked section if it is not already open
  if (!isVisible) {
    content.style.display = "block";
    button.querySelector("span").textContent = "-"; // Change "+" to "-"
  }
}
