// Create binding to the signup form DOM node
const signUpForm = document.forms.SignUp;

// JavaScript runs an "event loop" that responds to
// user actions ("interactivity").
//
// Attach "event listener" to the sign up form.
//
signUpForm.addEventListener("submit", function(event){

  // 1. stop the page from refreshing
  event.preventDefault();

  // 2. get the data out  of the form
  const name = signUpForm.elements.name.value;
  const jobTitle = signUpForm.elements.jobTitle.value;

  // 3. "serialize" the data. It needs to ultimately
  // be in a string because localStorage only accepts
  // strings.
  const userJSON = {
    "name": name,
    "jobTitle": jobTitle
  }
  const userStringified = JSON.stringify(userJSON);

  localStorage.setItem("_cb_user", userStringified);
});
