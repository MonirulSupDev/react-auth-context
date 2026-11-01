import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Creating user any where in the app through Context
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signing in user any where in the app through Context
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signing in user with google any where in the app through Context
  const signInWithGoogle = () => {
    setLoading(true);
    // Implementing Google sign-in logic here
    return signInWithPopup(auth, googleProvider);
  };

  // Signing out user any where in the app through Context
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observing auth state(current user) change any where in the app through Context
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        "Observing current user inside useEffect of AuthProvider",
        currentUser,
      );
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
