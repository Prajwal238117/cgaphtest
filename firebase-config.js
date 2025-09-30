// Firebase modular v12 shared config and service exports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnaTN0WxUy5RAzHJZPTaitirFCeXdiqTU",
  authDomain: "cgaphtest.firebaseapp.com",
  projectId: "cgaphtest",
  storageBucket: "cgaphtest.firebasestorage.app",
  messagingSenderId: "253404156717",
  appId: "1:253404156717:web:6a71ae159caf7e489139a4",
  measurementId: "G-5RSXZPF5MS"
};

export const app = initializeApp(firebaseConfig);
// Make analytics optional (throws on non-HTTPS or unsupported environments)
let analyticsInstance = null;
try { analyticsInstance = getAnalytics(app); } catch (e) { /* no-op */ }
export const analytics = analyticsInstance;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


