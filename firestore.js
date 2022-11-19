import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 실제로는 노출하면 안됨 ENV로 꼭 따로 보관할 것
const firebaseConfig = {
  apiKey: "AIzaSyC46LQpVpW_vPE7OgSPKuz77n2ZJazJTpI",
  authDomain: "myhero-first.firebaseapp.com",
  projectId: "myhero-first",
  storageBucket: "myhero-first.appspot.com",
  messagingSenderId: "514542654370",
  appId: "1:514542654370:web:de80ecaaa31beb6e7b58fb",
  measurementId: "G-T2CFYVJJXN",
};

const Firebase = initializeApp(firebaseConfig);
const FireStorage = getFirestore(Firebase);

export { Firebase, FireStorage, firebaseConfig };
