import { createContext,useContext,useState,type ReactNode  } from "react";

interface AuthContextType{
    user: any,
    isLoggedIn: (userData:any) => void,
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user,setUser] = useState(null);

    const isLoggedIn = (userData:any) => setUser(userData);

    return (
        <AuthContext.Provider value={{user,isLoggedIn}}>
           {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)!;

