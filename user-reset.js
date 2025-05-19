

 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
      import {
        getAuth,
        signInWithEmailAndPassword,
      } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
      import {
        getFirestore,
        getDoc,
        doc,
      } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

      const firebaseAuthConfig = {
        apiKey: "AIzaSyAmwwfxHZ3nxMyGcAx-XIiWnVHtyLIsGPg",
        authDomain: "user-login-food-ordering.firebaseapp.com",
        projectId: "user-login-food-ordering",
        storageBucket: "user-login-food-ordering.firebasestorage.app",
        messagingSenderId: "395699560797",
        appId: "1:395699560797:web:f28c9dbc85cfed87ae88b4",
      };

      const firebaseStoreConfig = {
        apiKey: "AIzaSyDmv_JzNAjosccdLlhaAvdHidcQXbl2yeE",
        authDomain: "online-food-ordering-e8513.firebaseapp.com",
        projectId: "online-food-ordering-e8513",
        storageBucket: "online-food-ordering-e8513.appspot.com",
        messagingSenderId: "498101486818",
        appId: "1:498101486818:web:474691ca84d07b01ebcabb",
        measurementId: "G-WB3NM7E4DZ",
      };

      const appAuth = initializeApp(firebaseAuthConfig, "authApp");
      const appStore = initializeApp(firebaseStoreConfig, "storeApp");

      //   const app = initializeApp(firebaseStoreConfig);
      const auth = getAuth(appAuth);
      const db = getFirestore(appStore);
      return