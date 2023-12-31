import { createContext, useEffect, useState } from "react"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../firebase/firebase.config';

const AuthContext = createContext(null)
const googleProvider  = new GoogleAuthProvider();
const githubProvider  = new GithubAuthProvider();




export default function Auth({children}) {
  const [ currentUser , setCurrentUser ] = useState(null);
  const [ loading , setLoading ] = useState(true)

  // create user with email & password 
    const createUser = (email , password) => {
       return createUserWithEmailAndPassword(auth , email , password);
    }

    // login with google account 
    const loginWithGoogle = ()=> {
      return signInWithPopup(auth, googleProvider )
    }

    // login with github auth
    const loginWithGithub = () => {
     return signInWithPopup(auth ,githubProvider)
    }

    // login user with email & password 
    const loginUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut handler 
    const logOut = () => {
      return signOut(auth);
    }

    // forgot password handler
    const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth , email);
    }

    // user observer ---

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=> {
        setCurrentUser(currentUser)
        setLoading(false);
      })
    }, [])

    // authentication functions 
    const authentication = { createUser , loginWithGoogle, loginWithGithub,   loginUser , logOut , forgotPassword , currentUser , loading }

  return (
    <>
    <AuthContext.Provider value={authentication}>
    {children}
    </AuthContext.Provider>
    </>
  )
}


export { AuthContext};