import { Banner } from '../../components/Banner';
import CheckboxLabels from '../../components/FilterProduct';
import './style.css'

const PageHome = () => {
    return(
        <>
            <h1>Home</h1>
            {/* <Banner/> */}
            <CheckboxLabels />
        </>
    );
}

export default PageHome;