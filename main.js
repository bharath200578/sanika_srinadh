document.addEventListener("DOMContentLoaded", function () {
  // Select the "Let's work together!" button using its class name
  const workTogetherButton = document.querySelector(".btn");

  // Add a click event that smoothly scrolls to the contact section
  workTogetherButton.addEventListener("click", function () {
    const contactSection = document.getElementById("contact");
    // scrollIntoView ensures the contact section comes into the user's view.
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
