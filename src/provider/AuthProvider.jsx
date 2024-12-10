import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isLoader, setIsLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const userLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const createUserEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUserEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const userSignOut = () => {
        return signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "Log Out Success!",
                    text: "Your account is log out now!",
                    icon: "success"
                });
            }).catch((error) => {
                toast.error(error.message)
            });
    }
    const passReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setIsLoader(false)
            } else {
                setUser(null)
                setIsLoader(false)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [isUpdate])
    const authInfo = {
        user,
        createUserEmailAndPass,
        updateUserProfile,
        userSignOut,
        userLoginWithGoogle,
        loginUserEmailAndPass,
        isLoader,
        passReset,
        setIsUpdate,
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;