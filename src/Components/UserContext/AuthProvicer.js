import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,signInWithPopup,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase-init';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvicer = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [serviceItems, setservice] = useState();
    useEffect(() => {
        fetch('https://service-server-beryl.vercel.app/packages')
            .then(res => res.json())
            .then(data => {
                setservice(data)
            })
            .catch(err => console.log(err.messages))
    }, []);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
const loginWithGoogle = (provicer) => {
        return signInWithPopup(auth, provicer)
}
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateInfo = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        loginWithGoogle,
        updateInfo,
        serviceItems,
        setLoading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvicer;