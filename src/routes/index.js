import { Routes, Route } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/accounts/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/accounts/RegisterPage';

const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>

            <Route path='/' element={<BlankLayout />}>
                <Route path='/account/login' element={<LoginPage />} />
                <Route path='/account/register' element={<RegisterPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default Router;