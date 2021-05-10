const initFirebase = require("./initFirebase");
firebase = initFirebase();

var db = firebase.firestore();

const classesData = require("../data/classes.json");
const programsData = require("../data/programs.json");

classesData.forEach(function (obj) {
  db.collection("classes")
    .doc(obj.key)
    .set(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

programsData.forEach(function (obj) {
  db.collection("programs")
    .doc(obj.key)
    .set(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
