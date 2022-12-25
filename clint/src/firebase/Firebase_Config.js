import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBnHIszwd_eFe1alu2Py9f0fNzcNxCHlO0",
//   authDomain: "signin-with-number.firebaseapp.com",
//   projectId: "signin-with-number",
//   storageBucket: "signin-with-number.appspot.com",
//   messagingSenderId: "698027018797",
//   appId: "1:698027018797:web:404fb9199084a2eb90c6a4",
//   measurementId: "G-5ZT5E6PKM2",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDdC_gm1i39WAg_zQ6b0BZ6N2VOj2FclrM",
  authDomain: "b2b-e-commerce-25964.firebaseapp.com",
  databaseURL: "https://b2b-e-commerce-25964-default-rtdb.firebaseio.com",
  projectId: "b2b-e-commerce-25964",
  storageBucket: "b2b-e-commerce-25964.appspot.com",
  messagingSenderId: "196547825657",
  appId: "1:196547825657:web:750e6e023a36790533b728",
  measurementId: "G-4QM4L1DW7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
