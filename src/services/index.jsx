import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { useContext } from 'react';
import { AuthContext } from '../App';
import AuthLayout from '../layouts/AuthLayout';
import PageHome from '../pages/PageHome';
import PageLogin from '../pages/PageLogin';

const Ways = () => {

    const { isLoggeg } = useContext(AuthContext);

    return(
        <BrowserRouter>
            <Routes>
                {
                    isLoggeg ? (
                        <Route path='/' element={<PageLayout />}>
                            <Route index element={<PageHome />} />
                        </Route>
                    ) : (
                        <Route path='/' element={<AuthLayout />}>
                            <Route index element={<PageLogin />} />
                        </Route>
                    )
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;