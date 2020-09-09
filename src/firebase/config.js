import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyBlWWk4pXFyqVg6oI7T_dRgvlBgdGh1oIo",
	authDomain: "firegram-app-dccb7.firebaseapp.com",
	databaseURL: "https://firegram-app-dccb7.firebaseio.com",
	projectId: "firegram-app-dccb7",
	storageBucket: "firegram-app-dccb7.appspot.com",
	messagingSenderId: "769732470052",
	appId: "1:769732470052:web:20456e03cacab658137fb1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
