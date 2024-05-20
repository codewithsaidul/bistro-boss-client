import { createContext, useEffect, useState } from "react";
import {
    FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // Sign Up a New User
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // Sign In a Existing User
  const loggedIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // Sign In With Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };


  // Sign In With Google
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(Auth, facebookProvider);
  };

  // Log Out User
  const logOut = () => {
    setLoading(true);
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(Auth, (currentUse) => {
      setLoading(false);
      setUser(currentUse);
    });

    return () => {
      unSubscribed();
    };
  }, [Auth]);

  const AuthInfo = {
    user,
    loggedIn,
    facebookSignIn,
    googleSignIn,
    createNewUser,
    logOut,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
