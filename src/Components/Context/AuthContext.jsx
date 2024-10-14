import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { Spinner } from "@nextui-org/react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {
            name: "",
            photoUrl: "",
            email: "",
        },
    });
    const [loading, setLoading] = useState(true);

    const onAuthChanged = (user) => {
        if (user) {
            setUser({
                isLogin: true,
                userInfo: {
                    name: user.displayName || "",
                    photoUrl: user.photoURL || "",
                    email: user.email || "",
                },
            });
        } else {
            setUser({
                isLogin: false,
                userInfo: {
                    name: "",
                    photoUrl: "",
                    email: "",
                },
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return () => subscriber(); // unsubscribe on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? (
                <div className="w-full h-96 flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
