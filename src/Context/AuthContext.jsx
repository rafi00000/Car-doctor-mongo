import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

 export const AuthContextCurrent = createContext(null);

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(false);



    const emailRegistration = (email, password) =>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userEmailLogin = (email, password) =>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubscribe = () => {
            onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                SetLoading(false)
            })
            
        } ;
        return () => {
            unSubscribe();
        }
        
    }, [])


    const authValue = {emailRegistration, userEmailLogin, user, loading};
    return (
        <AuthContextCurrent.Provider value={authValue}>
            {children}
        </AuthContextCurrent.Provider>
    );
};

export default AuthContext;