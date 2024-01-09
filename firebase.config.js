import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

/**Initialising App */
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

export const storage = getStorage(firebaseApp)
