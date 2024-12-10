import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CareerBlog from '../Pages/CareerBlog/CareerBlog';
import PrivetRoute from '../route/PrivetRoute';
import MyProfile from '../Pages/MyProfile/MyProfile';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'career-blog',
                element: <PrivetRoute><CareerBlog></CareerBlog></PrivetRoute>,
                loader: () => fetch('/blogsData.json')
            },
            {
                path: 'my-profile',
                element: <PrivetRoute><MyProfile></MyProfile></PrivetRoute>,
            },
            {
                path: 'servicesDetails/:id',
                element: <PrivetRoute><ServicesDetails></ServicesDetails></PrivetRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/careerServices.json')
                    const data = await res.json()
                    const findData = data.find(d => d.id === params.id)
                    return findData
                }
            },

        ]
    },
    {
        path: 'login',
        element: <Login></Login>,
    },
    {
        path: 'reg',
        element: <Register></Register>
    },
    {
        path: 'forget-password/:email',
        element: <ForgetPassword></ForgetPassword>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;