"use strict";
/* a string to indicate that all code in script are executed in strict mode
e.g., cannot use undeclare variables */

function checkForm(element) {
  let firstname = element.firstname.value;
  let email = element.email.value;
  let text = element.text.value;

  let fail = "";

  if (firstname == "" || email == "" || text == "") {
    fail = "Fields with * are mandatory";
  } else if (firstname.length <= 1 || firstname > 20) {
    fail = "Please enter a valid name";
  } else if (text.length < 10 || text.length > 100 || text == "") {
    fail = "The message length should be between 10 and 100 characters";
  }

  console.log(typeof firstname);

  if (fail != "") {
    document.getElementById(`error`).innerHTML = fail;
    return false;
  } else {
    alert("Your message had been sent!");
    return true;
  }
}
