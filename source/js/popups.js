var error = document.querySelector(".modal-error");
var success = document.querySelector(".modal-success");
var btn = document.querySelector(".popup-button");
var formbtn = document.querySelector(".review-form__submit");


formbtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!document.getElementsByName("user_name")[0].value &&
    !document.getElementsByName("user_surname")[0].value &&
    !document.getElementsByName("user_mail")[0].value) {
    error.classList.add("modal-error--opened");
  } else {
    success.classList.add("modal-success--opened");
  }
});


btn.addEventListener("click", function() {
  if (success.classList.contains("modal-success--opened")) {
    success.classList.remove("modal-success--opened");
  } else if (error.classList.contains("modal-error--opened")) {
    error.classList.remove("modal-error--opened");
  }
});
