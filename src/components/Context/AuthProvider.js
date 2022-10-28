import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateCurrentUser } from "firebase/auth";

export const AuthContext = createContext();

const auth  = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
      const unsubscribded =  onAuthStateChanged(auth , (currentUser ) =>{
            console.log('User inside state changed', currentUser)
            setUser(currentUser);
        });
        return unsubscribded;
    },[])


    const authInfo = {user, providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;