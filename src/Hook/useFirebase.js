import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInititilize from "../Firebase/firebase.authInitializ";

authInititilize()
const useFirebase =() =>{
  const [user,setUser] =useState({});
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleInUsingSignIn =() =>{ 
     return signInWithPopup(auth, provider)
     .finally(() => { setLoading(false) })
          }
          const registerUser = (email, password) => {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setAuthError('');
                })
                .catch((error) => {
                    setAuthError(error.message);
                    console.log(error);
                })
                .finally(() => setLoading(false));
        }

        const loginUser = (email, password, location, history) => {
          setLoading(true);
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  const destination = location?.state?.from || '/';
                  history.replace(destination);
                  setAuthError('');
              })
              .catch((error) => {
                  setAuthError(error.message);
              })
              .finally(() => setLoading(false));
      }

useEffect( () => {
const auth = getAuth();
const unsubscribe =  onAuthStateChanged(auth, user => {
  if (user) {
    setUser(user)
   }
   else {
    setUser({});
}
setLoading(false);
});
return () => unsubscribe;
},[]);
const logOut =() =>{
  const auth = getAuth();
  setLoading(true);
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .finally(() => setLoading(false))
}


return {
  user,
  authError,
  loading,
  googleInUsingSignIn,
  logOut,
  registerUser,
  loginUser
}

    
}
export default useFirebase;