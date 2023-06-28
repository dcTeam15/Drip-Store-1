import styled from "styled-components";


const CardDestaque = (props) => {
  return (
    <Card>
      <CardContainer>
        <CardDiscount>
          {props.cardDestaqueDiscount}
        </CardDiscount>
        <CardTitle>
          {props.cardDestaqueTitle}
        </CardTitle>
        <CardButton onClick={props.cardClick}>
          {props.cardButtonLabel}
        </CardButton>
      </CardContainer>
        <CardImage src={props.cardImage} alt={props.cardImageAlternativeText} />
    </Card>
  )
}

const Card = styled.div`
  background-color: #D8E3F2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.8rem 0 0 1.8rem;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 1rem 0 0 1rem;
  }
`;

const CardContainer = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
  }

`

const CardDiscount = styled.div`
  font-size: 14px;
  font-weight: 700;
  background-color: #E7FF86;
  width: fit-content;
  padding: 0.7rem;
  border-radius: 29px;
`

const CardTitle = styled.h2`
  width: 8.2rem;
`

const CardButton = styled.button`
  background-color: #F5F5F5;
  border-radius: 8px;
  color: #C92071;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border: 0;
  cursor: pointer;
  transition: all 200ms;
  &:hover{
    transition: all 200ms;
    background-color: #C92071;
    color: #F5F5F5;
  }
`;

const CardImage = styled.img`
`

export default CardDestaque;