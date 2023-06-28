import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import { Radio } from "@mui/material";
import {useFilter } from '../../hooks/useFilter'
export default function CheckboxLabels() {
  const {
    checkedItems,
    radioValor,
    handleCheckboxChange,
    handleRadioChange,
  } = useFilter();

  // const [radioValue, setRadioValue] = React.useState("");

  // const handleRadioClick = (value) => {
  //   if (radioValue === value) {
  //     setRadioValue("");
  //   } else {
  //     setRadioValue(value);
  //   }
  // };
 console.log(checkedItems)
  return (
    <FilterGroupContainer>
      <Title>Filtrar por</Title>
      <Line />
      <StyleMarkaContainer>
        <TitleMarka>Marca</TitleMarka>
        <FormControlLabel
          control={
            <Checkbox
             checked={checkedItems["Adiddas"] || false}
              onChange={handleCheckboxChange}
              name="Adiddas"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Adiddas"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Calenciaga"] || false}
            onChange={handleCheckboxChange}
            name="Calenciaga"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Calenciaga"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["K-Swiss"] || false}
            onChange={handleCheckboxChange}
            name="K-Swiss"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="K-Swiss"
          sx={{ height: "22px", width: "198px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Nike"] || false}
            onChange={handleCheckboxChange}
            name="Nike"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Nike"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Puma"] || false}
            onChange={handleCheckboxChange}
            name="Puma"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Puma"
          sx={{ height: "22px", width: "77px" }}
        />
      </StyleMarkaContainer>

      <StyleCategoriaContainer>
        <TitleCategoria>Categoria</TitleCategoria>
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Esporte e lazer"] || false}
            onChange={handleCheckboxChange}
            name="Esporte e lazer"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Esporte e lazer"
          sx={{ height: "22px", width: "200px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Casual"] || false}
            onChange={handleCheckboxChange}
            name="Casual"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Casual"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Utilitário"] || false}
            onChange={handleCheckboxChange}
            name="Utilitário"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Utilitário"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Corrida"] || false}
            onChange={handleCheckboxChange}
            name="Corrida"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Corrida"
          sx={{ height: "22px", width: "77px" }}
        />
      </StyleCategoriaContainer>

      <StyleGêneroContainer>
        <TitleGênero>Gênero</TitleGênero>
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Masculino"] || false}
            onChange={handleCheckboxChange}
            name="Masculino"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Masculino"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Feminino"] || false}
            onChange={handleCheckboxChange}
            name="Feminino"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Feminino"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={checkedItems["Unisex"] || false}
            onChange={handleCheckboxChange}
            name="Unisex"
              sx={{
                transform: "scale(0.99)",
                "&.Mui-checked": { color: "#C92071" },
              }}
            />
          }
          label="Unisex"
          sx={{ height: "22px", width: "77px" }}
        />
      </StyleGêneroContainer>
      <StyleEstadoContainer>
        <TitleEstado>Estado</TitleEstado>
        <FormControlLabel
          value="male"
          control={
            <Radio
              // checked={radioValue === "male"}
              // onClick={() => handleRadioClick("male")}
              sx={{ "&.Mui-checked": { color: "#C92071" } }}
            />
          }
          label="Novo"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              // checked={radioValue === "other"}
              // onClick={() => handleRadioClick("other")}
              sx={{ "&.Mui-checked": { color: "#C92071" } }}
            />
          }
          label="Usado"
          sx={{ height: "22px", width: "77px" }}
        />
      </StyleEstadoContainer>
    </FilterGroupContainer>
  );
}

const FilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  gap: 5px;
  width: 270px;
  height: 700px;
  background: #ffffff;
  border-radius: 4px;
  border: 2px solid darkgray;
  @media (max-width: 375px) {
    display: none;
  }
`;

const Title = styled.h3`
  color: #474747;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Line = styled.hr`
  width: 248px;
  height: 0px;
  border: 1px solid #cccccc;
  margin-left: -2px;
`;

const StyleMarkaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const TitleMarka = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.75px;
  color: #474747;
`;
const StyleCategoriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const TitleCategoria = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
const StyleGêneroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const TitleGênero = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
const StyleEstadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const TitleEstado = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
