import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";


const Banner = () => {

    return (
        <>
          
            < div className="carousel w-full h-[600px]" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/w4YtCpc/omar-ram-e-Eh-Oy-Et-BGMQ-unsplash.jpg' className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                          
                        
                            <div className="flex mt-96">
                                <button className="btn btn-active btn-accent mr-5">Sports More</button>
                                <button className="btn btn-outline btn-info">Sports Learn</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/w4YtCpc/omar-ram-e-Eh-Oy-Et-BGMQ-unsplash.jpg' className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            
                           
                            <div className="flex mt-96">
                                <button className="btn btn-active btn-accent mr-5">Sports More</button>
                                <button className="btn btn-outline btn-info">Sports Learn</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/QbPH9fp/alliance-football-club-z-Lz8k5i-Q1-ZU-unsplash.jpg' className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            
                       
                            <div className="flex mt-96">
                                <button className="btn btn-active btn-accent mr-5">Sports More</button>
                                <button className="btn btn-outline btn-info">Best Sports</button>
                            </div>
                        </div>
                    </div>
              
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Banner;