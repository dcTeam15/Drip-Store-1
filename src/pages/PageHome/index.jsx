import { Banner } from '../../components/Banner';
import ColecaoDestaque from '../../components/ColecaoDestaque';

import './style.css'

const PageHome = () => {
    return(
        <>
            <h1>Home</h1>
            <ColecaoDestaque typeModeCollection="cards"/>
            <ColecaoDestaque typeModeCollection="icons"/>
            {/* <Banner/> */}
        </>
    );
}

export default PageHome;