

 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
      import {
        getAuth,
       
      } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
      import {
        getFirestore,
        
      } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

      const firebaseConfig = {
        apiKey: "AIzaSyDmv_JzNAjosccdLlhaAvdHidcQXbl2yeE",
        authDomain: "online-food-ordering-e8513.firebaseapp.com",
        projectId: "online-food-ordering-e8513",
        storageBucket: "online-food-ordering-e8513.appspot.com",
        messagingSenderId: "498101486818",
        appId: "1:498101486818:web:474691ca84d07b01ebcabb",
        measurementId: "G-WB3NM7E4DZ",
      };

      const app = initializeApp(firebaseConfig);
     
      const appAuth = initializeApp(firebaseConfig, "authApp");
      // const appStore = initializeApp(firebaseStoreConfig, "storeApp");

      //   const app = initializeApp(firebaseStoreConfig);
        export   const auth = getAuth(appAuth);
        //  export  const db = getFirestore(appStore);
    
    
    