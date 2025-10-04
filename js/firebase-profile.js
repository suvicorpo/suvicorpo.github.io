// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase config (replace with your values)
const firebaseConfig = {
    apiKey: "AIzaSyC1gbMVp8Su9p6P-aCdzFV8VRskfZ3HSVg",
    authDomain: "viewpoint-e4e0e.firebaseapp.com",
    projectId: "viewpoint-e4e0e",
    storageBucket: "viewpoint-e4e0e.firebasestorage.app",
    messagingSenderId: "211228215",
    appId: "1:211228215:web:00ab3debadef7dba5491b2",
    measurementId: "G-HS3D82ZK41"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to populate profile from Firestore
async function populateProfile(userId) {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      document.querySelector(".Name").innerHTML = `<strong>Name:</strong> ${data.name || "N/A"}`;
      document.querySelector(".Email").innerHTML = `<strong>Email:</strong> ${data.email || "N/A"}`;
      document.querySelector(".Phone").innerHTML = `<strong>Phone:</strong> ${data.phone || "N/A"}`;
      document.querySelector(".Location").innerHTML = `<strong>Location:</strong> ${data.location || "N/A"}`;
      document.querySelector(".Subscriptions").innerHTML = `<strong>Subscriptions:</strong> ${data.subscriptions || "N/A"}`;
      document.querySelector(".status").innerHTML = `<strong>Status:</strong> ${data.status || "Inactive"}`;
      document.querySelector(".renewal").innerHTML = `<strong>Next Renewal Date:</strong> ${data.renewal || "N/A"}`;
      document.querySelector(".profile-picture img").src = data.profilepic || "images/profiles/profile-blue.png";
      document.querySelector(".profile-icon").src = data.profilepic || "images/profiles/profile-blue.png";
      document.querySelector(".profile-text").innerHTML = data.name || "Profile";
      document.querySelector(".profile-header").innerHTML = `<strong>${data.name || "N/A"}</strong>\'s Profile`;
    } else {
      console.log("No such user data!");
    }
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}

export async function fetchUserData() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const subStatus = data.status || "Inactive";
            const subType = data.subscriptions || "None";
            const usrName = data.name || "Profile";
            resolve({ subStatus, subType, usrName });
          } else {
            console.log("No such user data!");
            resolve({ subStatus: "Inactive", subType: "None", name: "Profile" });
          }
        } catch (err) {
          console.error("Error getting profile:", err);
          reject(err);
        }
      } else {
        console.log("No user signed in");
        resolve({ subStatus: "Inactive", subType: "None", name: "Profile" });
      }
    });
  });
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    populateProfile(user.uid);
    fetchUserData(user.uid);
  } else {
    window.location.href = "login.html"; // redirect if not logged in
  }
});

import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
