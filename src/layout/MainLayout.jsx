import Navbar from '../components/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const MainLayout = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className=''>
            <ScrollRestoration />
            <Navbar></Navbar>
            <div style={{ minHeight: "calc(100vh - 300px)" }} className='mx-auto max-w-[1440px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;