import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateCurrentUser, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const auth  = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
   
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect( () => {
      const unsubscribded =  onAuthStateChanged(auth , (currentUser ) =>{
            console.log('User inside state changed', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return unsubscribded;
    },[])


    const authInfo = {user, providerLogin, logOut, createUser, signIn, loading, setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;