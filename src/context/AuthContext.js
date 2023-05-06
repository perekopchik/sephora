import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword ,signInWithEmailAndPassword,
    signOut ,
    onAuthStateChanged,
updateProfile}
    from 'firebase/auth';

import {auth, db} from "../engine/firebase";
import {addDoc, collection, query, getDocs, where} from "firebase/firestore";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState({});

    const createUser = async (email, password,name) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, { displayName: name }).catch((err) => console.log(err))
        } catch (e) {
            console.log(e.message);
        }
    };

    const addUser = async (name) => {
        try {
            await onAuthStateChanged(auth,async (currentUser)=>{
                const docRef = await addDoc(collection(db, "users"), {
                    uid: currentUser.uid,
                    name: name,
                    email: currentUser.email,
                    favorites: []
                });
                setUser({name: name})
                localStorage.setItem("userId",docRef.id);
                console.log("Document written with ID: ", docRef.id);
            })
        } catch (e) {
            console.log(e.message);

    }
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        localStorage.removeItem("userId");
        return signOut(auth);
    }

    const findUserByEmail = async (email) => {
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching documents.");
        } else {
            const docRef = querySnapshot.docs[0].ref;
            localStorage.setItem("userId",docRef.id);
        }
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    })


    return (
        <UserContext.Provider value={{createUser,user,logout,signIn,findUserByEmail,addUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}