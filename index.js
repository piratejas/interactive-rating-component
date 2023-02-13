const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const submitButton = document.getElementById("submit-button");
const rating = document.getElementById("rating");
const values = document.querySelectorAll(".rating-number");

submitButton.addEventListener("click", () => {
  thankYouCard.classList.remove("hidden");
  ratingCard.style.display = "none";
});

values.forEach((value) => {
  value.addEventListener("click", () => {
    rating.innerHTML = value.innerHTML;
  });
});
