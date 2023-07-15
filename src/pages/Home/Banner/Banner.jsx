

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
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-auto"><Fade cascade duration={30}>Journey into sports of Germany</Fade></h2>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs lg:text-lg text-auto">こんにちは! Embark on a captivating journey into the heart of Japanese. Immerse yourself in the harmony of ancient traditions and cutting-edge technology. Let the beauty of Japanese characters and the allure of its cultural heritage captivate your senses.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg" />
                    <div className="absolute top-0 flex items-center px-6 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white mx-auto">
                            <h3 className="-ml-6 text-2xl md:text-3xl md:-ml-6font-semibold mb-4 text-auto"><Fade cascade duration={30}>Experience the Magic of sports Child</Fade></h3>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs lg:text-lg text-auto">Manchester City boss Guardiola had texted BT Sport pundit Ferdinand earlier to tell him that his side would beat Real Madrid, which they did. Easily.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/QbPH9fp/alliance-football-club-z-Lz8k5i-Q1-ZU-unsplash.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                            <h2 className="text-2xl md:text-3xl md:-ml-4 font-semibold mb-4 text-auto"><Fade cascade duration={30}>Football match interest Adventure</Fade></h2>
                            <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs lg:text-lg text-slate-300 ">¡Hola! Prepare to embark on a vibrant Spanish adventure filled with passion, excitement, and rich heritage. From the sultry rhythms of Flamenco to the mouthwatering flavors of paella, let Spanish ignite your senses and open doors to a whole new world.</p></Fade>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;