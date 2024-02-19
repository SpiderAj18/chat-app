import { createContext, useContext,useState } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext();
export const useAuthContext =()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const getItems = JSON.parse(localStorage.getItem("chat-user"))
    console.log(getItems)
  const [authUser, setAuthUser] = useState(
      null);

  return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
};
