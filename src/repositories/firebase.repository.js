import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider, signInWithPopup, getAuth, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

getDatabase(app);

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

const FirebaseRepository = {
    login: async (keep) => {
        auth.setPersistence(keep ? browserLocalPersistence : browserSessionPersistence);
        return signInWithPopup(auth, provider)
            .then(() => true)
            .catch((error) => {
                console.error(error);
                return false;
            });
    },
    isLogged: (callback) => {
        if (callback instanceof Function) auth.onAuthStateChanged(callback);
        return auth.currentUser !== null;
    }
};

export default FirebaseRepository;
