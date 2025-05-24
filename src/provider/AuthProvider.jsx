import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext =createContext();
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);

    }
    const authData={
       user,
       setUser,
       createUser,
    }
    return <AuthContext value={authData}>
        {children}

    </AuthContext>
};

export default AuthProvider;