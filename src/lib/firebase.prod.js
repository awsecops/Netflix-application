import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCTddZpiNbO43O_Bp3s7NggFnYAMFIhgVs",
  authDomain: "netflix-13466.firebaseapp.com",
  projectId: "netflix-13466",
  storageBucket: "netflix-13466.appspot.com",
  messagingSenderId: "694604734897",
  appId: "1:694604734897:web:e07113224c074d94c65d90"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
