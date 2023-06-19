import Ways from "./services"
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react";

export const AuthContext = createContext(null);

const App = () => {

  const [isLoggeg, setIsLoggeg] = useState(true);

  function checkLogin(){
    setIsLoggeg(JSON.parse(sessionStorage.getItem('isLoggeg')) || false);
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
<<<<<<< HEAD
      <AuthContext.Provider value={{isLoggeg, setIsLoggeg}}>
        <Ways />
      </AuthContext.Provider>
    </>
  )
}

export default App
=======
      <LoginContext.Provider value={{logado, setLogado}} >
        <Ways />
      </LoginContext.Provider>
    </>
  );
};
>>>>>>> 22a33ff2a784eda013264ac1d4e1ffce3af759eb
