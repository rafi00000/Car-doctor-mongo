import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

 export const AuthContextCurrent = createContext(null);

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(false);



    const emailRegistration = (email, password) =>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userEmailLogin = () =>{
        SetLoading
    }


    

    useEffect(() =>{
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                SetLoading(false)
            })
            return () => {
                unsubscribe();
            }
        } ;
    }, [])


    const authValue = {emailRegistration};
    return (
        <AuthContextCurrent.Provider value={authValue}>
            {children}
        </AuthContextCurrent.Provider>
    );
};

export default AuthContext;