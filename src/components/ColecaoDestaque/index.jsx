import styled from "styled-components";
import CardDestaque from "../CardDestaque";
import CardIconsDestaque from "../CardIconsDestaque";

// images
import supremeStarWars from "../../assets/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png";
import tenisAdidas from "../../assets/ddd 1.png";
import fonesBeats from "../../assets/d9db11953a2d185d37246bb1f500c957 1.png";
import calcaIcon from "../../assets/Vector.svg";

const ColecaoDestaque = (props) => {
  return (
    <Container className={props.typeModeCollection === "icons" ? "IconsContainer": null}>
      {props.typeModeCollection === "cards" ? (
        <>
          <CardTitle>{props.title}</CardTitle>
          <CardContainer>
            <CardDestaque
              cardDestaqueDiscount="30% OFF"
              cardDestaqueTitle="Novo drop Supreme"
              cardButtonLabel="Comprar"
              cardImage={supremeStarWars}
              cardImageAlternativeText="Camisa da Supreme do Star"
            />

            <CardDestaque
              cardDestaqueDiscount="30% OFF"
              cardDestaqueTitle="Coleção Adidas"
              cardButtonLabel="Comprar"
              cardImage={tenisAdidas}
              cardImageAlternativeText="Tenis Adidas"
            />

            <CardDestaque
              cardDestaqueDiscount="30% OFF"
              cardDestaqueTitle="Novo Beats Bass"
              cardButtonLabel="Comprar"
              cardImage={fonesBeats}
              cardImageAlternativeText="Camisa da Supreme do Star"
            />
          </CardContainer>
        </>

      ) : null}

      {props.typeModeCollection === "icons" ? (
        <>
          <CardTitle className="center">{props.title}</CardTitle>
          <IconsContainer className="IconContainer">
              <CardIconsDestaque 
                iconTitle="Camisas"
                iconImage={calcaIcon}
                iconAlternativeText="Icone de uma camisa"
              />
              <CardIconsDestaque 
                iconTitle="Camisas"
                iconImage={calcaIcon}
                iconAlternativeText="Icone de uma camisa"
              />
              <CardIconsDestaque 
                iconTitle="Camisas"
                iconImage={calcaIcon}
                iconAlternativeText="Icone de uma camisa"
              />
              <CardIconsDestaque 
                iconTitle="Camisas"
                iconImage={calcaIcon}
                iconAlternativeText="Icone de uma camisa"
              />
              <CardIconsDestaque 
                iconTitle="Camisas"
                iconImage={calcaIcon}
                iconAlternativeText="Icone de uma camisa"
              />
          </IconsContainer>
        </>
      ) : null}
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1rem 1rem 1rem;
    height: 100%;
    &.IconsContainer{
      justify-content: center;
      align-items: center;
      margin-top: 6rem;
    }

    @media screen and (max-width: 768px) {
      margin: 1.5rem 1rem 1rem 1rem;
      justify-content: center;
      &.IconsContainer{
      justify-content: center;
      align-items: start;
    }
    }

    @media screen and (max-width: 450px) {
      margin: 1.5rem 1rem 1rem 1rem;
      &.IconsContainer{
      justify-content: center;
      margin-top: 0rem;
      overflow-x: auto;
    }
    }
    
  `

const CardContainer = styled.section`
  display: flex;
  height: 100%;
  gap: 1rem;
  &.IconContainer{
    gap: 0rem;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    width: 100%;
  }
`;

const IconsContainer = styled.section`
  display: flex;
  height: 100%;
  gap: 1rem;
  &.IconContainer{
    gap: 0rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 450px) {
    width: 100%;

  }
`;

const CardTitle = styled.h4`
    &.center{
      text-align: center;
    }
`

export default ColecaoDestaque;