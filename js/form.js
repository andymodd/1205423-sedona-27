var button = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var aDate = form.querySelector("[name=arrival-date]");
var lDate = form.querySelector("[name=leaving-date]")
var submitButton = form.querySelector("[type=submit]");
var adult = form.querySelector("[name=adult-amount]");
var child = form.querySelector("[name=child-amount]");
var isStorageSupport = true;
var adultStorage = "";

try {
  adultStorage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function () {
  form.classList.toggle("search-form-collapsed");
} );

form.addEventListener("submit", function (evt) {
  if (!aDate.value || !lDate.value || !adult.value || !child.value) {
    evt.preventDefault();
    form.classList.remove("search-form-shaked");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-shaked");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("child", child.value);
    }
  }
});

window.addEventListener("DOMContentLoaded", function () {
  form.classList.toggle("search-form-collapsed");
  var adultStoraged = localStorage.getItem("adult");
  var childStoraged = localStorage.getItem("adult");
  if (adultStoraged) {
    adult.value = adultStoraged;
  }
  if (childStoraged) {
    child.value = childStoraged;
  }
});
