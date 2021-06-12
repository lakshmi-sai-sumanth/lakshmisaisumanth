let submit = document.getElementById("submit-btn");
submit.addEventListener('click', function () {



  let email = document.getElementById("user-email").value;
  let name = document.getElementById("user-name").value;
  let textarea = document.getElementById("text-area").value;
  let regx1 = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  let regx2 = /^([a-zA-Z0-9\.-_]{4,50})$/;
  let regx3 = /^([a-zA-Z0-9\.-_ ]+)$/;

  document.getElementById("nameErrorMsg").innerText = "";
  document.getElementById("emailErrorMsg").innerText = "";
  document.getElementById("textErrorMsg").innerText = "";
  document.getElementById("user-name").style.outline = "0px";
  document.getElementById("user-email").style.outline = "0px";
  document.getElementById("text-area").style.outline = "0px";




  if (name == "") {
    document.getElementById("nameErrorMsg").innerText = "Name can't be empty";
    document.getElementById("nameErrorMsg").style.color = "red";
    document.getElementById("user-name").style.outline = "1px solid red";
    document.getElementById("user-name").focus();
  }
  else if (regx2.test(name)) {
    document.getElementById("nameErrorMsg").innerText = "Valid Name";
    document.getElementById("nameErrorMsg").style.color = "green";
    document.getElementById("user-name").style.outline = "1px solid green";
  }
  else {
    document.getElementById("nameErrorMsg").innerText = "Name formate not valid";
    document.getElementById("nameErrorMsg").style.color = "red";
    document.getElementById("user-name").style.outline = "1px solid red";
    document.getElementById("user-name").focus();
  };
  if (email == "") {
    document.getElementById("emailErrorMsg").innerText = "Email can't be empty";
    document.getElementById("emailErrorMsg").style.color = "red";
    document.getElementById("user-email").style.outline = "1px solid red";
    document.getElementById("user-email").focus();
  }
  else if (regx1.test(email)) {
    document.getElementById("emailErrorMsg").innerText = "Valid Email ID";
    document.getElementById("emailErrorMsg").style.color = "green";
    document.getElementById("user-email").style.outline = "1px solid green";
  }
  else {
    document.getElementById("emailErrorMsg").innerText = "Invalid Email ID, Your Email must be in a Valid formate";
    document.getElementById("emailErrorMsg").style.color = "red";
    document.getElementById("user-email").style.outline = "1px solid red";
    document.getElementById("user-email").focus();
  };
  if (textarea == "") {
    textErrorMsg.innerText = "Text me something";
    textErrorMsg.style.color = "red";
    document.getElementById("text-area").style.outline = "1px solid red";
    document.getElementById("text-area").focus();
  }
  else if (regx3.test(textarea)) {
    textErrorMsg.innerText = "Your message valid";
    textErrorMsg.style.color = "green";
    document.getElementById("text-area").style.outline = "1px solid green";
  }
  else {
    textErrorMsg.innerText = "Text me here";
    textErrorMsg.style.color = "red";
    document.getElementById("text-area").style.outline = "1px solid red";
    document.getElementById("text-area").focus();
  }

  if (regx2.test(name) && regx1.test(email) && regx3.test(textarea)) {
    alert("Thank you for contact us we were reach you soon :)");
    return true;

  }
  else {
    return false;
  }












});



