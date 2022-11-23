import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    // states
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // gmail signIn 
    const emailSignIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email login
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    // update user
    const updateInfo = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:image
        })
    }
    // logOut function
    const logOut = () => {
        signOut(auth).then(()=>{}).catch(err=>console.log(err.message))
    }
    const userInfo={loading,user,emailSignIn,emailLogin,updateInfo,logOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;