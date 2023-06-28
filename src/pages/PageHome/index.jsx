import { Banner } from '../../components/Banner';
import ColecaoDestaque from '../../components/ColecaoDestaque';

import './style.css'

const PageHome = () => {
    return(
        <>
            <h1>Home</h1>
            <Banner/>
            <ColecaoDestaque typeModeCollection="cards" title="Coleção Destaque"/>
            <ColecaoDestaque typeModeCollection="icons" title="Coleção Destaque"/>
        </>
    );
}

export default PageHome;