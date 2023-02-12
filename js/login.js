document.getElementById('button-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
  if(email=='bangladesh71@gmail.com' && password == 'secret@#'){
    location.href = "bank.html";
  }
  else{
    alert('invalid user');
  }

});