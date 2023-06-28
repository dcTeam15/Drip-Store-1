import { useState } from "react";

export const useFilter = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [radioValor, setRadioValor] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleRadioChange = (value) => {
    setRadioValor(value);
  };

  const filterItems = (items) => {
    const filteredItems = items.filter((item) => {
      if (checkedItems[item.marca]) {
        return true;
      }
 
      if (checkedItems[item.categoria]) {
        return true;
      }
   
      if (checkedItems[item.genero]) {
        return true;
      }
     
      if (item.estado === radioValor) {
        return true;
      }
      return false;
    });

    return filteredItems;
  };

  return {
    checkedItems,
    radioValor,
    handleCheckboxChange,
    handleRadioChange,
    filterItems,
  };
};
