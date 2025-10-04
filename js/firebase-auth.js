import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase config (same as before)
const firebaseConfig = {
    apiKey: "AIzaSyC1gbMVp8Su9p6P-aCdzFV8VRskfZ3HSVg",
    authDomain: "viewpoint-e4e0e.firebaseapp.com",
    projectId: "viewpoint-e4e0e",
    storageBucket: "viewpoint-e4e0e.firebasestorage.app",
    messagingSenderId: "211228215",
    appId: "1:211228215:web:00ab3debadef7dba5491b2",
    measurementId: "G-HS3D82ZK41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "profile.html"; // redirect on success
  } catch (error) {
    document.getElementById("errorMessage").textContent = error.message;
  }
});

// Register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Add display name to Firebase Auth
    await updateProfile(user, { displayName: name });

    // Create a Firestore document for the user
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      phone: "",
      location: "",
      subscriptions: "Free",
      status: "Active",
      renewal: "",
      profilepic: "images/profiles/profile-blue.png"
    });

    window.location.href = "profile.html"; // redirect to profile
  } catch (error) {
    document.getElementById("errorMessage").textContent = error.message;
  }
});
