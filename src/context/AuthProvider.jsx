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
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const  axiosPublic = useAxiosPublic();

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
    const unSubscribed = onAuthStateChanged(Auth, async (currentUser) => {
      setUser(currentUser);

      if(currentUser) {
        // Get Token & Store On Client Side
        const userInfo = { email: currentUser.email}
        const { data } = await axiosPublic.post('/jwt', userInfo);
        if(data.token) {
          localStorage.setItem('Access-Token', data.token)
        }
      } else {
        // Remove Token From Client Side
        localStorage.removeItem('Access-Token')
      }

      setLoading(false);
    });

    return () => {
      unSubscribed();
    };
  }, [Auth, axiosPublic]);

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
