import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInititilize = () => {
    initializeApp(firebaseConfig);
}
export default authInititilize;