import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDsL2Wqo7JuGvoRdC9OGCM1kgSQnEjRdg0",
  authDomain: "photowall-fed6b.firebaseapp.com",
  databaseURL: "https://photowall-fed6b.firebaseio.com",
  projectId: "photowall-fed6b",
  storageBucket: "photowall-fed6b.appspot.com",
  messagingSenderId: "309997986645",
  appId: "1:309997986645:web:9aebca64745479491ec5dc",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
