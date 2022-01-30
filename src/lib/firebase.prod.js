import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDlxL0goiTQGW1kr9RZz-aXeaFb5B9mBfA",
  authDomain: "netflix-pplication.firebaseapp.com",
  projectId: "netflix-pplication",
  storageBucket: "netflix-pplication.appspot.com",
  messagingSenderId: "452921770199",
  appId: "1:452921770199:web:ee037e33d591297136f092"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
