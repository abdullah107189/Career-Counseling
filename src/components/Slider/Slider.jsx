import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div  data-aos="fade-up">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper md:my-10 my-5 rounded-lg"
            >
                <SwiperSlide className='rounded-lg'>
                    <div className='border border-red-300 flex items-center justify-center rounded-lg'>
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 w-full h-full">
                            <div className="container mx-auto text-center">
                                <h2 className="text-3xl font-semibold mb-4">Begin Your Career Journey with Expert Guidance</h2>
                                <p className="text-lg mb-6">Take the first step towards your dream career. Get personalized counseling tailored to your needs.</p>
                                <a href="#get-started" className="btn btn-accent text-white">Get Started</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-lg'>
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 rounded-lg">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-semibold mb-4">Explore Our Services</h2>
                            <p className="text-lg mb-6">Get expert guidance tailored to your career goals, from personalized coaching to resume building and job search tips.</p>
                            <a href="#services" className="btn btn-accent text-white">Discover Services</a>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='rounded-lg'>
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 rounded-lg">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-semibold mb-4">Real Success Stories</h2>
                            <p className="text-lg mb-6">Hear from individuals whose careers have been transformed with the help of our expert counseling and guidance.</p>
                            <a href="#success-stories" className="btn btn-accent text-white">Read Success Stories</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;