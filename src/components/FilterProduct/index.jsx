import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import { Radio } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <FilterGroupContainer>
      <Title>Filtrar por:</Title>
      <Line />
      <StyleMarkaContainer>
        <TitleMarka>Marca</TitleMarka>
        <FormControlLabel
          control={
            <Checkbox
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
          control={<Radio sx={{"&.Mui-checked": { color: "#C92071" }}}/>}
          label="Novo"
          sx={{ height: "22px", width: "77px" }}
        />
        <FormControlLabel
          value="other"
          control={<Radio sx={{"&.Mui-checked": { color: "#C92071" }}}/>}
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
  width: 308px;
  height: 720px;
  background: #ffffff;
  border-radius: 4px;
  overflow-y: auto;
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
`;
const TitleMarka = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.75px;
  color: #474747;
`;
const StyleCategoriaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleCategoria = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
const StyleGêneroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleGênero = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
const StyleEstadoContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;
const TitleEstado = styled.h4`
  width: 46px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
