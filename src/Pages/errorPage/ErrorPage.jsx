import { Helmet } from 'react-helmet-async';
import errorPage from '../../assets/404_page.png'
const ErrorPage = () => {
    return (

        <div className='h-[80%]'>
            <Helmet>
                <title>404 page || Career Counseling</title>
            </Helmet>
            <img className='pt-20 md:pt-10 w-2/3 mx-auto object-cover' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;