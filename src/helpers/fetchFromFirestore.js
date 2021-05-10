const initFirebase = require("./initFirebase");
firebase = initFirebase();

const db = firebase.firestore();

// Fetch data from firestore
const getData = async () => {
  const classesSnaps = await db.collection("classes").get();
  const programsSnaps = await db.collection("programs").get();

  return {
    classes: classesSnaps.docs.map(doc => doc.data()),
    programs: programsSnaps.docs.map(doc => doc.data()),
  };
};

module.exports = getData;
