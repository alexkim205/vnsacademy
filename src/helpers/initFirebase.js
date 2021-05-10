const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const initFirebase = () => {
  if (firebase.apps.length !== 0) {
    return firebase;
  }
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyB4f_AALX43ckCydbfIWu01jog8SCRYOIE",
    authDomain: "vnsacademy-store.firebaseapp.com",
    projectId: "vnsacademy-store",
  });
  return firebase;
};

module.exports = initFirebase;
