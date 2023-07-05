const firebaseConfig = {
    apiKey: "AIzaSyCByDuS-Z5BxBA83dm-Q8Yixot0-BJaqtY",
    authDomain: "regestrationform-e14c3.firebaseapp.com",
    databaseURL: "https://regestrationform-e14c3-default-rtdb.firebaseio.com",
    projectId: "regestrationform-e14c3",
    storageBucket: "regestrationform-e14c3.appspot.com",
    messagingSenderId: "723748406718",
    appId: "1:723748406718:web:d035602bef5097c69da5ef",
    measurementId: "G-434R47Q7VB"
  };
  firebase.initializeApp(firebaseConfig);
  var RegestraionFormDB = firebase.database().ref('RegestrationForm');
  document.getElementById('RegestrationForm').addEventListener("submit", submitForm);

  function submitForm(e)
  {
    e.preventDefault();

    var fullname = getElementVal("fullname");
    var number = getElementVal("number");
    var email = getElementVal("email");
    
    storeData(fullname, number, email)
    document.getElementById('RegestrationForm').reset();
  }

 const storeData = (fullname, number, email) =>
  {
    var newRegestrationForm = RegestraionFormDB.push();

    newRegestrationForm.set({
        fullname : fullname,
        number : number,
        email : email
    })
  }

  const getElementVal =(id)=>
  {
    return document.getElementById(id).value;
  }