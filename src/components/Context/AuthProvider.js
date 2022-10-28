import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateCurrentUser, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const auth  = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect( () => {
      const unsubscribded =  onAuthStateChanged(auth , (currentUser ) =>{
            console.log('User inside state changed', currentUser)
            setUser(currentUser);
        });
        return unsubscribded;
    },[])


    const authInfo = {user, providerLogin, logOut, createUser, signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;