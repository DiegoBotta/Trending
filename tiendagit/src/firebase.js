import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyBpfQNK2JmWu9vSvrKaYBeV45d8Ek0oQpU",
    authDomain: "mitienda-1952.firebaseapp.com",
    projectId: "mitienda-1952",
    storageBucket: "mitienda-1952.appspot.com",
    messagingSenderId: "182182713495",
    appId: "1:182182713495:web:c36bb739150549fd36f1d2"
  })

 export  const getFirebase = () => {
      return app
  }

 export const getFirestore = ()=> {
      return firebase.firestore(app);
  }