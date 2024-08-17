 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCRIgaMm0ls-tCQI5m1bPS3bgyapz6bzjo",
   authDomain: "learning-wih-ibles.firebaseapp.com",
   projectId: "learning-wih-ibles",
   storageBucket: "learning-wih-ibles.appspot.com",
   messagingSenderId: "318340415626",
   appId: "1:318340415626:web:c6bd364a864a8ecf272d73"
 };

 const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);

const signup_email = document.getElementById("signup-email");
const signup_pass = document.getElementById("signup-pass");
const signup_btn = document.getElementById("sinup-btn");

signup_btn.addEventListener("click", cua);


 onAuthStateChanged(auth, (user) => {
   if (user) {
    console.log("User loggin")
         const uid = user.uid;
     
   } else {
    
    console.log("User not loggin")
    
  }
 });
 
function cua(){
 console.log("vvy") 
}