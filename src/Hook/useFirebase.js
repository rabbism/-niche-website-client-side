import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";
import authInititilize from "../Firebase/firebase.authInitializ";

authInititilize()
const useFirebase =() =>{
    const[user,setUser] =useState()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const logInWithEmail =(email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
    // ...
  })
    }

    const logInWithGoogle =()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user)
    // ...
  })
    // ...
  }
  return{
      logInWithEmail,
      logInWithGoogle,
      user
  }

    
}
export default useFirebase;