function validateForm() {
  const email = document.getElementById("email").value;
  const mnumber = document.getElementById("mnumber").value;
  const email_reg = /^[^\s]+@[^\s]+\.[^\s]+$/;
  if (mnumber.length !== 10) {
    alert("Mobile number must be 10 numbers long!!!");
    return false;
  } else if (mnumber[0] !== '9') {
    alert("Mobile number should start with 9!!!");
    return false;
  }
  if (!email_reg.test(email)) {
    alert("Email should be of the form - host@domain.tld");
    return false;
  } else {
    alert("Successfully Submited");
    return true;
  }
}