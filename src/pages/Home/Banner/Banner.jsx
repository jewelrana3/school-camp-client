// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";



// // import required modules
// import { Navigation } from "swiper";
// import SetPageTitle from "../../../components/SetPageTitle";
// import { Fade } from "react-awesome-reveal";


// const Banner = () => {

//     return (
//         <>

//             < div className="carousel w-full h-[600px]" >
//                 <div id="slide1" className="carousel-item relative w-full">
//                     <img src='https://i.ibb.co/w4YtCpc/omar-ram-e-Eh-Oy-Et-BGMQ-unsplash.jpg' className="w-full rounded-lg" />
//                     <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
//                         <div className='text-white space-y-7 pl-12 w-1/2 container'>


//                             <div className="mt-80">
//                                 <Fade delay={1e2} duration={2000} damping={1e-3}><p className="text-stone-400 paragraph">International football was in its infancy at the time. However,  international tournament was organised by sources claim that an unofficial football tournament was organised during the first competition</p></Fade>
//                                 <div className="flex button">
//                                     <button className="btn btn-active btn-accent mr-5">Sports More</button>
//                                     <button className="btn btn-outline btn-info">Sports Learn</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
//                         <a href="#slide4" className="btn btn-circle mr-5">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative w-full">
//                     <img src='https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg' className="w-full rounded-lg" />
//                     <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
//                         <div className='text-white space-y-7 pl-12 w-1/2'>


//                             <div className="mt-80">
//                             <Fade delay={1e2} duration={2000} damping={1e-3}><p className="text-stone-400 font-">International football was in its infancy at the time. However,  international tournament was organised by sources claim that an unofficial football tournament was organised during the first competition</p></Fade>
//                                 {/* <p className="text-stone-400 font-normal">International football was in its infancy at the time. However,  international tournament was organised by sources claim that an unofficial football tournament was organised during the first competition</p> */}
//                                 <div className="flex">
//                                     <button className="btn btn-active btn-accent mr-5">Sports More</button>
//                                     <button className="btn btn-outline btn-info">Sports Learn</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
//                         <a href="#slide1" className="btn btn-circle mr-5">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative w-full">
//                     <img src='https://i.ibb.co/QbPH9fp/alliance-football-club-z-Lz8k5i-Q1-ZU-unsplash.jpg' className="w-full rounded-lg" />
//                     <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
//                         <div className='text-white space-y-7 pl-12 w-1/2'>


//                             <div className="mt-80">
//                             <Fade delay={1e2} duration={2000} damping={1e-3}><p className="text-stone-400 font-">During the 1920 final against Belgium, the Czechoslovakia national football team walked off the field to protest the refereeing of John Lewis and the militarised mood within the stadium in Antwerp</p></Fade>
//                                 <div className="flex">
//                                     <button className="btn btn-active btn-accent mr-5">Sports More</button>
//                                     <button className="btn btn-outline btn-info">Sports Learn</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-4">
//                         <a href="#slide2" className="btn btn-circle mr-5">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div >
//         </>
//     );
// };

// export default Banner;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/w4YtCpc/omar-ram-e-Eh-Oy-Et-BGMQ-unsplash.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                            <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Journey into sports of Germany</Fade></h2>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">こんにちは! Embark on a captivating journey into the heart of Japanese. Immerse yourself in the harmony of ancient traditions and cutting-edge technology. Let the beauty of Japanese characters and the allure of its cultural heritage captivate your senses.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                            <h3 className="text-2xl md:text-5xl font-semibold mb-4"><Fade cascade duration={30}>Experience the Magic of sports Child</Fade></h3>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">Manchester City boss Guardiola had texted BT Sport pundit Ferdinand earlier to tell him that his side would beat Real Madrid, which they did. Easily.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/QbPH9fp/alliance-football-club-z-Lz8k5i-Q1-ZU-unsplash.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                            <h2 className="text-2xl md:text-5xl font-semibold mb-4 "><Fade cascade duration={30}>Football match interest Adventure</Fade></h2>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg text-slate-300">¡Hola! Prepare to embark on a vibrant Spanish adventure filled with passion, excitement, and rich heritage. From the sultry rhythms of Flamenco to the mouthwatering flavors of paella, let Spanish ignite your senses and open doors to a whole new world.</p></Fade>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;