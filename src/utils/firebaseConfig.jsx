import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN0vQTlL-3FUM1lLe6pEesJ3n_zMyBgMw",
  authDomain: "proyecto-fermin.firebaseapp.com",
  projectId: "proyecto-fermin",
  storageBucket: "proyecto-fermin.appspot.com",
  messagingSenderId: "59560246243",
  appId: "1:59560246243:web:a400162f3a111e3119bed6",
};

/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
*/

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "categories"))
      .then((querySnapshot) => {
        const categories = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(categories);
        resolve(categories);
      })
      .catch((err) => {
        reject(`Error obteniendo categorias: ${err}`);
      });
  });
};

export const getData = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value
        ? query(collection(db, "items"), where(key, operator, value))
        : collection(db, "items");
    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          // console.log(doc);
          return { id: doc.id, ...doc.data() };
        });
        console.log(links);

        resolve(links);
      })
      .catch((err) => {
        reject(
          `Error obteniendo itemData ${value ? "por categoria" : ""}: ${err}`
        );
      });
  });
};
