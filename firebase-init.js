const firebaseConfig = {
    apiKey: "AIzaSyDu5jbWcYn525iWAnhnPPua5uEZCPRwpjg",
    authDomain: "gestaofinanceiro-226d5.firebaseapp.com",
    databaseURL: "https://gestaofinanceiro-226d5-default-rtdb.firebaseio.com",
    projectId: "gestaofinanceiro-226d5",
    storageBucket: "gestaofinanceiro-226d5.appspot.com",
    messagingSenderId: "614323977382",
    appId: "1:614323977382:web:1c19f7bfef797058cb4867"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();