import React from 'react';
import './Image.css'
import TitleHeader from '../../components/TitleHeader';

const Image = () => {
    return (
        <div  data-aos="flip-up"   data-aos-duration="2000">
          <TitleHeader title='Our ' sub='Sports' des='Footballs first world championship After these tournaments, FIFA realized that the Olympic '></TitleHeader>
            <div className='image-item bg-fixed mb-20'>
                <div className='md:flex justify-center bg-opacity-10 bg-slate-400  items-center py-10 px-16 mt-16'>

                    <div>
                        <img style={{ height: '20rem', width: '100rem' }} src="https://i.ibb.co/3hj45HT/alliance-football-club-w-BJu-XJU3aw4-unsplash.jpg" alt="" />
                    </div>
                    <div className='ml-10'>
                        <p>23 March,2024</p>
                        <p> FIFA World Cup on seven occasions, the first being in 1998 where they lost all three group games and finished in 31 three world cups</p>
                        <button className="btn btn-dark mt-4">Our View</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Image;