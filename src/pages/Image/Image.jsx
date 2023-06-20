import React from 'react';
import './Image.css'

const Image = () => {
    return (
      
            <div className='image-item bg-fixed mb-20'>
                <div className='md:flex justify-center bg-opacity-10 bg-slate-400  items-center py-10 px-16'>
                 
                        <div>
                           <img style={{height:'20rem' ,width:'100rem'}} src="https://i.ibb.co/JzrKN8w/elizeu-dias-2-EGNqazb-AMk-unsplash.jpg" alt="" />
                        </div>
                        <div className='ml-10'>
                            <p>23 March,2024</p>
                            <p>Japan have appeared in the FIFA World Cup on seven occasions, the first being in 1998 where they lost all three group games and finished in 31 three world cups: 2010, 2014, 2018.[2]</p>
                            <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                        </div>
                    
                </div>
            </div>
      
    );
};

export default Image;