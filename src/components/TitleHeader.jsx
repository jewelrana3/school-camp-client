import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TitleHeader = ({ title, sub, des }) => {
    return (
        <div className="text-center my-8 w-full px-2 md:w-2/3 mx-auto">
            <div className='flex items-center justify-center'>
                <h2 className="text-3xl md:text-3xl font-semibold text-green-700"><Fade cascade duration={50}>{title}</Fade></h2>
                <h2 className="text-3xl md:text-3xl font-semibold"><Fade cascade duration={50}>{sub}</Fade></h2>
            </div>
            <Fade delay={1e2} cascade damping={1e-1}><p className="text-sm mt-4">{des}</p></Fade>
        </div>
    );
};

export default TitleHeader;