import React from 'react';
import { CircleArrow } from './style'

const ReviewsFirstView = () => {
    return (
        <div className='flex w-10/12 gap-6'>
            <div className='flex flex-col w-2/5 pb-16 relative'>
                <CircleArrow>
                    <img src="/reviews/arrow.png" alt="arrow" />
                </CircleArrow>
                <div className='w-4/5'>
                    <p className='text-5xl font-medium'>What <span style={{ color: "#FE7244" }}>Students</span> Say <span style={{ color: "#FE7244" }}>About</span> Us</p>
                    <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci possimus quisquam libero blanditiis illum!</p>
                </div>
                <div className='flex gap-4 mt-6'>
                    <div className='w-3/5 self-end h-3/5'>
                        <img src="/reviews/1.jpg" className='rounded-3xl' alt="review" />
                    </div>
                    <div className='w-3/5'>
                        <img src="/reviews/4.jpg" className='rounded-3xl' alt="review" />
                    </div>
                </div>
            </div>
            <div className='w-3/5 flex flex-wrap items-center justify-between gap-2'>
                <div className='w-[32%] self-end h-2/5'>
                    <img className='rounded-3xl' src="/reviews/3.jpg" alt="review" />
                </div>
                <div className='w-[32%]'>
                    <img src="/reviews/4.jpg" className='rounded-3xl' alt="review" />
                </div>
                <div className='w-[32%] self-end h-1/2'>
                    <img src="/reviews/5.jpg" className='rounded-3xl' alt="review" />
                </div>
                <div className='w-[32%] '>
                    <img src="/reviews/6.jpg" className='rounded-3xl' alt="review" />
                </div>
                <div className='w-[32%] self-start h-1/2  '>
                    <img src="/reviews/5.jpg" className='rounded-3xl' alt="review" />
                </div>
                <div className='w-[32%] self-center  '>
                    <img src="/reviews/6.jpg" className='rounded-3xl' alt="review" />
                </div>
            </div>
        </div>
    );
};

export default ReviewsFirstView;
