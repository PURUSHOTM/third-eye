// src/firebase/firebaseConfig.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAF4eJPQfZgr2pBdZxoh7jFOHtpuZH7D_k",
    authDomain: "third-eye-for-blind-961b2.firebaseapp.com",
    projectId: "third-eye-for-blind-961b2",
    storageBucket: "third-eye-for-blind-961b2.appspot.com",
    messagingSenderId: "689686830325",
    appId: "1:689686830325:web:a2983ca3d2ef1473dd79bc",
    measurementId: "G-5TW3Z4KCG6"
};

// Check if a Firebase app is already initialized
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

// Initialize Analytics only on the client side
let analytics;
if (typeof window !== "undefined" && app.name && !getApps().length) {
    analytics = getAnalytics(app);
}

export { app, analytics };
