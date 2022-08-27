const ratingBtns = [...document.querySelectorAll(".rating-btn")];
const submitBtn = document.getElementById("submit-btn");
const ratingResult = document.querySelector(".rating-result");
const mainContainer = document.getElementById("main");
const notification = document.getElementById("note");
let natificationActive = false;

/** adds effect to selected rating btn */
const ratingSelected = (btn) => {
  const oldSelectedRating = document.querySelector(".selected-rating-btn");
  if (oldSelectedRating)
    oldSelectedRating.classList.remove("selected-rating-btn");
  btn.classList.add("selected-rating-btn");
  ratingResult.textContent = `You selected ${btn.textContent} out of 5`;
};

/** hides the rating ui and shows the results ui */
const ratingComplete = () => {
  const selectedRating = document.querySelector(".selected-rating-btn");
  if (!selectedRating) {
    if (!natificationActive) {
      notification.classList.add("note-trigger");
      natificationActive = true;
      setTimeout(() => {
        notification.classList.remove("note-trigger");
        natificationActive = false;
      }, 3000);
    }
    return;
  }
  showSuccess(true);
};

/** gets back to the rating UI */
const init = () => {
  showSuccess(false);
};

/**  shows/hides the success ui */
const showSuccess = (show) => {
  if (show) {
    mainContainer.classList.add("show-success");
    return;
  }
  mainContainer.classList.remove("show-success");
};

/** listeners */
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => ratingSelected(btn));
});
submitBtn.addEventListener("click", ratingComplete);
ratingResult.addEventListener("click", init);
