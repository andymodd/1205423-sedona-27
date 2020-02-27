var button = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var aDate = form.querySelector("[name=arrival-date]");
var lDate = form.querySelector("[name=leaving-date]")
var submitButton = form.querySelector("[type=submit]");
var adult = form.querySelector("[name=adult-amount]");
var child = form.querySelector("[name=child-amount]");
var isStorageSupport = true;
var adultStorage = "";
var childStorage = "";

button.addEventListener("click", function() {
  form.classList.toggle("search-form-collapsed");
} );

submitButton.addEventListener("submit", function(evt) {
  if (!aDate.value || !lDate.value || !adult.value || !child.value) {
    evt.preventDefault();
    console.log("Error!");
  }
});
