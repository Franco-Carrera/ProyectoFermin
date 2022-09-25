import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0vQTlL-3FUM1lLe6pEesJ3n_zMyBgMw",
  authDomain: "proyecto-fermin.firebaseapp.com",
  projectId: "proyecto-fermin",
  storageBucket: "proyecto-fermin.appspot.com",
  messagingSenderId: "59560246243",
  appId: "1:59560246243:web:a400162f3a111e3119bed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getLinks = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "enlaces"))
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(links);
        resolve(links);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      });
  });
};
