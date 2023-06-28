import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import Header from "./components/Header";
import CheckboxLabels from "./components/FilterProduct";
import ProdutoCard from "./components/ProdutoCard";
import { useFilter } from "./hooks/useFilter";
import { products } from './utils/MockData'
// import Ways from "./routes";


export const AuthContext = createContext(null);

const App = () => {
  const {checkedItems, radioValor,filterItems} = useFilter();

  const filteredProducts = filterItems(products);
  const [isLoggeg, setIsLoggeg] = useState(false);

  function checkLogin() {
    // sessionStorage.setItem('isLoggeg', 'false');
    setIsLoggeg(JSON.parse(sessionStorage.getItem("isLoggeg")) || true);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isLoggeg, setIsLoggeg }}>
        <Header />
        {/* <Ways /> */}
         <CheckboxLabels />
       
       
      <div>
        {filteredProducts.map((product, index) =>
          <div key={index}>
            {product.marca === 'Adiddas' && <ProdutoCard marca={product.marca} valor={product.valor} />}
            {product.marca === 'Puma' && <ProdutoCard marca={product.marca} valor={product.valor} />}
            {product.marca === 'K-Swiss' && <ProdutoCard marca={product.marca} valor={product.valor} />}
          </div>
        )}
      </div> 
  
          
      </AuthContext.Provider>
    </>
  );
};

export default App;
