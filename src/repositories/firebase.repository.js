import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider, signInWithPopup, getAuth, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD1n9D3brmqs-sJBUBkr86EsJoYfUk4zm4',

    authDomain: 'cavernatech-website.firebaseapp.com',

    databaseURL: 'https://cavernatech-website-default-rtdb.europe-west1.firebasedatabase.app',

    projectId: 'cavernatech-website',

    storageBucket: 'cavernatech-website.appspot.com',

    messagingSenderId: '767644680985',

    appId: '1:767644680985:web:acc8851b3b2773ff7bbb88'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getDatabase(app);

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

const FirebaseRepository = {
    login: async (keep) => {
        console.log(keep);
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
