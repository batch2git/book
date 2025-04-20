import React from 'react';
import Button from '../component/Button';

const HeroSection = () => {
    return (
        <div className='my-10 px-8 py-5 h-[554px] bg-gray-50 rounded-lg  grid grid-cols-2 items-center justify-between'>
            <div className='space-y-10'>
                <h2 className='text-6xl font-semibold'>Books to freshen up your bookshelf</h2>
                <Button type={"button"} text={"View The List"}/>
            </div>
            <div >
             <img className='mx-auto h-full' src="/public/assets/kindpng_4945926 1.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;