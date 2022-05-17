function submitForum(){
  var x = document.getElementById("before");
  if (x.style.display === "none"){
    x.style.display = "block";}
  else {
    x.style.display = "none";
}
  let username = document.userform.input_username.value;
  let userEmail = document.userform.input_email.value;
  let userPhoneNum = document.userform.input_phoneNum.value;
  let usernameResult = document.getElementById("nameResult");
  let emailResult = document.getElementById("emailResult");
  let phoneResult = document.getElementById("phoneNumResult");

  usernameResult.innerHTML = username;
  emailResult.innerHTML = userEmail;
  phoneResult.innerHTML = userPhoneNum;
  console.log(username,userEmail,userPhoneNum);
}
function returnHome(){
  var x = document.getElementById("before");
  if (x.style.display === "none"){
    x.style.display = "block";}
  else {
    x.style.display = "none";
}
}