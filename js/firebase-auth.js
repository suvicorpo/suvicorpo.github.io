import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-conf.js"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      // Check if Firestore doc exists
      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        await setDoc(userDocRef, {
          name: user.displayName || "",
          email: user.email,
          phone: "",
          location: "",
          subscriptions: "Free",
          status: "Active",
          renewal: "",
          profilepic: "images/profiles/profile-blue.png",
        });
      }

      window.location.href = "stream.html";
    } else {
      document.getElementById("errorMessage").textContent = "Please verify your email before logging in.";
      await auth.signOut();
    }

  } catch (error) {
    document.getElementById("errorMessage").textContent = error.message;
  }
});

import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    // 🔥 Create Firestore user document immediately
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      name: name,
      email: email,
      phone: "",
      location: "",
      subscriptions: "Free",
      status: "Pending", // not verified yet
      renewal: "",
      profilepic: "images/profiles/profile-blue.png",
    });

    // 📧 Send verification email
    await sendEmailVerification(user);

    document.getElementById("errorMessage").textContent = "Verification email sent. Please check your inbox.";
    await auth.signOut(); // prevent access until verified

  } catch (error) {
    console.error("Registration error:", error);
    document.getElementById("errorMessage").textContent = error.message;
  }
});