import styled from "styled-components";

const CardIconsDestaque = (props) => {
    return (
        <Container>
            <ContainerIcon>
                <Link href="">
                    <Icons src={props.iconImage} alt={props.iconImageAlternativeText} />
                </Link>
            </ContainerIcon>

            <Link href="">
                <Text>{props.iconTitle}</Text>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        
    }

`;

const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    padding: 0.5rem;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    border-radius: 150px;
    height: 4rem;
    width: 4rem;

`

const Icons = styled.img`
    width: 2.9rem;

`

const Text = styled.h6`

`

const Link = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default CardIconsDestaque;