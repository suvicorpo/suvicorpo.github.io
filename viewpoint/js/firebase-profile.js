// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc,setDoc, collection, getDocs, query, orderBy, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-conf.js";
import { renderContinue } from "./viewpoint.js";

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
};

// Fetch user data (for use in other modules)
export async function fetchUserData() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            resolve({
              uid: auth.currentUser,
              subStatus: data.status || "Inactive",
              subType: data.subscriptions || "None",
              usrName: data.name || "Profile",
              profilepic: data.profilepic || "images/profiles/profile-blue.png"
            });
          } else {
            console.log("No such user data!");
            resolve({ subStatus: "Inactive", subType: "None", usrName: "Profile", profilepic: "images/profiles/profile-blue.png" });
          }
        } catch (err) {
          console.error("Error getting profile:", err);
          reject(err);
        }
      } else {
        console.log("No user signed in");
        resolve({ subStatus: "Inactive", subType: "None", usrName: "Profile", profilepic: "images/profiles/profile-blue.png" });
      }
    });
  });
};

export async function updateUserProfilePic(newPicUrl) {
  const user = auth.currentUser;
  if (!user) throw new Error('No user is currently signed in.');
  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, { profilepic: newPicUrl });
}

// ✅ Save watch progress
export async function updateContinueWatching(item, currentTime, duration) {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, "users", user.uid, "continueWatching", item.id);
  await setDoc(userRef, {
    id: item.id,
    title: item.title,
    show: item.show,
    poster: item.poster,
    src: item.src,
    position: currentTime,
    duration: duration,
    lastWatched: new Date().toISOString(),
    se: item.se,
    year: item.year,
    sub: item.sub
  });
}

// ✅ Get continue watching list
export async function fetchContinueWatching() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return resolve([]);
      try {
        const cwRef = collection(db, "users", user.uid, "continueWatching");
        const q = query(cwRef, orderBy("lastWatched", "desc"));
        const snapshot = await getDocs(q);
        resolve(snapshot.docs.map(doc => doc.data()));
      } catch (err) {
        console.error('Error fetching continueWatching:', err);
        reject(err);
      }
    });
  });
}

export async function updateWatchList(item) {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, "users", user.uid, "watchList", item.id);
  await setDoc(userRef, {
    id: item.id,
    title: item.title,
    show: item.show,
    poster: item.poster,
    src: item.src,
    se: item.se,
    year: item.year,
    sub: item.sub
  });
}

export async function fetchWatchlist() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return resolve([]);
      try {
        const cwRef = collection(db, "users", user.uid, "watchList");
        const q = query(cwRef);
        const snapshot = await getDocs(q);
        resolve(snapshot.docs.map(doc => doc.data()));
      } catch (err) {
        console.error('Error fetching watchList:', err);
        reject(err);
      }
    });
  });
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    populateProfile(user.uid);
    fetchUserData(user.uid);
    fetchContinueWatching(user.uid); 
    fetchWatchlist(user.uid);
  } else {
    window.location.href = "login.html"; // redirect if not logged in
  }

  window.addEventListener('DOMContentLoaded', async () => {
    await renderContinue(); // Add this to trigger rendering after page loads
  });
});

import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
