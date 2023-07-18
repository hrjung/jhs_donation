    // Import the functions you need from the SDKs you need
    import { 
        initializeApp 
    } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

    import { 
      getDatabase, 
      ref, 
      set, 
      get
    } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBvAYV-S7EhL4Ftkryto_oIe7lvk1iOo1M",
      authDomain: "prj-jsh.firebaseapp.com",
      databaseURL: "https://prj-jsh-default-rtdb.asia-southeast1.firebasedatabase.app", // 변경된 URL
      projectId: "prj-jsh",
      storageBucket: "prj-jsh.appspot.com",
      messagingSenderId: "76159834218",
      appId: "1:76159834218:web:24f4b4fcde83ff1edd5213"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    export { app, getDatabase, ref, set, get };