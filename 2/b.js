function validateForm() {
  const username = document.getElementById("username").value;
  const mnumber = document.getElementById("mnumber").value;
  if (username.length < 6) {
    alert("Username must be of minimum six characters!!!");
    return false;
  }
  if (mnumber.length !== 10) {
    alert("Mobile number must be 10 numbers long!!!");
    return false;
  } else if (mnumber[0] !== '9') {
    alert("Mobile number should start with 9!!!");
    return false;
  } else {
    alert("Successfully Submited");
    return true;
  }
}