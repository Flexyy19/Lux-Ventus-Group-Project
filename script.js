// Open mobile hamburger menu
const burgerCheckbox = document.getElementById("burger");
const navbar = document.querySelector(".navbar");

burgerCheckbox.addEventListener("change", () => {
  if (burgerCheckbox.checked) {
    navbar.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    navbar.classList.remove("open");
    document.body.style.overflow = "visible";
  }
});

// Scroll topics on button click
const topicsList = document.querySelector(".section-topics__items-list");
const chevronButtons = document.querySelectorAll(
  ".section-topics__chevron-btn"
);

if (chevronButtons.length >= 2) {
  // Scroll left
  chevronButtons[0].addEventListener("click", () => {
    topicsList.scrollBy({ left: -200, behavior: "smooth" });
  });

  // Scroll right
  chevronButtons[1].addEventListener("click", () => {
    topicsList.scrollBy({ left: 200, behavior: "smooth" });
  });
}
