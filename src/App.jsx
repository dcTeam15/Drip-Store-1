import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react";
import Header from "./components/Header";
import Ways from "./routes";


export const AuthContext = createContext(null);

const App = () => {

  const [isLoggeg, setIsLoggeg] = useState(false);

  function checkLogin(){
    // sessionStorage.setItem('isLoggeg', 'false');
    setIsLoggeg(JSON.parse(sessionStorage.getItem('isLoggeg')) || true);
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <AuthContext.Provider value={{isLoggeg, setIsLoggeg}}>
      <Header/>
 
        <Ways />
      </AuthContext.Provider>
    </>
  )
}

export default App
