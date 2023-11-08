import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import firebaseConfig from '../../firebase.json';

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
