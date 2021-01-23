firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
  
      if(user != null){
        window.location.replace("index.html");
      }
    }
  });
  
  function login(){  
    var userEmail = document.getElementById("emailinput").value;
    var userPass = document.getElementById("passinput").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  